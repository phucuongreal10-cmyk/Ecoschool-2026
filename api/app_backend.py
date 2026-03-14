from flask import Flask, request, jsonify, g
from flask_cors import CORS
import sqlite3
import os
import base64
from google import genai
from google.genai import types
import json

# ==========================================
# GEMINI API CONFIGURATION
# ==========================================
# Key is loaded ONLY from environment variable (set it in Vercel dashboard)
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
if not GEMINI_API_KEY:
    print("WARNING: GEMINI_API_KEY environment variable is not set!")
client = genai.Client(api_key=GEMINI_API_KEY)

MODEL_NAME = "gemini-2.0-flash"
generation_config = types.GenerateContentConfig(
  temperature=0.1,
  top_p=0.95,
  top_k=40,
  max_output_tokens=1024,
  response_mime_type="application/json",
)

app = Flask(__name__)
CORS(app)

# Use absolute path for DB to avoid issues in different environments
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# VERCEL FIX: Serverless environment is read-only except for /tmp.
if os.environ.get('VERCEL') or os.environ.get('VERCEL_ENV'):
    DB_FILE = '/tmp/ecoschool.db'
else:
    DB_FILE = os.path.join(BASE_DIR, 'ecoschool.db')

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DB_FILE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    # We use a standalone connection here for initialization
    import sqlite3
    db = sqlite3.connect(DB_FILE)
    # Submissions Table
    db.execute('''
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT NOT NULL,
            class_name TEXT NOT NULL,
            type TEXT NOT NULL,
            time TEXT NOT NULL,
            img TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'pending',
            tokens_rewarded INTEGER DEFAULT 0,
            ai_insight TEXT DEFAULT ''
        )
    ''')
    # Users Table (Critical for Green Tokens)
    db.execute('''
        CREATE TABLE IF NOT EXISTS users (
            username TEXT PRIMARY KEY,
            tokens INTEGER DEFAULT 0
        )
    ''')
    # Schema Migrations (Ensure columns exist for older local databases)
    migration_queries = [
        'ALTER TABLE submissions ADD COLUMN status TEXT NOT NULL DEFAULT "pending"',
        'ALTER TABLE submissions ADD COLUMN tokens_rewarded INTEGER DEFAULT 0',
        'ALTER TABLE submissions ADD COLUMN ai_insight TEXT DEFAULT ""',
        'ALTER TABLE users ADD COLUMN tokens INTEGER DEFAULT 0',
        'ALTER TABLE global_stats ADD COLUMN co2 REAL DEFAULT 0',
        'ALTER TABLE global_stats ADD COLUMN waste REAL DEFAULT 0',
        'ALTER TABLE global_stats ADD COLUMN trees REAL DEFAULT 0'
    ]
    for q in migration_queries:
        try:
            db.execute(q)
        except sqlite3.OperationalError:
            pass # Column likely already exists
    
    # Ensure global_stats has the initial row if it was just created
    db.execute('INSERT OR IGNORE INTO global_stats (id, co2, waste, trees) VALUES (1, 0, 0, 0)')

    # Rewards Inventory Table
    db.execute('''
        CREATE TABLE IF NOT EXISTS rewards_inventory (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            cost INTEGER NOT NULL,
            stock_remaining INTEGER NOT NULL,
            icon TEXT NOT NULL,
            color TEXT NOT NULL
        )
    ''')
    # Insert/Refresh default rewards (Physical Goods)
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r1', 'Bút mầm cây tái chế', 50, 200, 'pen-tool', '#f59e0b'))
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r2', 'Móc khóa Gỗ an toàn', 100, 100, 'star', '#d97706'))
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r3', 'Sổ tay giấy Kraft bìa cứng', 150, 50, 'book', '#10b981'))
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r4', 'Bộ ống hút tre tự nhiên', 200, 30, 'check-circle', '#84cc16'))
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r5', 'Cây sen đá mini để bàn', 250, 20, 'sprout', '#059669'))
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r6', 'Túi vải Canvas EcoSchool', 300, 20, 'shopping-bag', '#eab308'))
    db.execute('INSERT OR REPLACE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r7', 'Bình giữ nhiệt Inox cao cấp', 800, 5, 'coffee', '#0d9488'))

    db.commit()
    db.close()

# Initialize database on startup - wrap in try/except so a DB failure
# doesn't kill the entire Flask app (especially the /api/analyze-waste route)
try:
    init_db()
except Exception as e:
    print(f"WARNING: DB init failed, submission features won't work: {e}")


# CORS Helper & Cache Prevention
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
    response.headers.add('Pragma', 'no-cache')
    response.headers.add('Expires', '0')
    return response

@app.route('/api/stats', methods=['GET'])
def get_stats():
    db = get_db()
    stats = db.execute('SELECT * FROM global_stats WHERE id = 1').fetchone()
    return jsonify({"co2": stats['co2'], "waste": stats['waste'], "trees": stats['trees']})

@app.route('/api/stats', methods=['POST'])
def update_stats():
    data = request.json
    db = get_db()
    db.execute('UPDATE global_stats SET co2=?, waste=?, trees=? WHERE id = 1',
               (data.get('co2', 0), data.get('waste', 0), data.get('trees', 0)))
    db.commit()
    return jsonify({"status": "success"})

@app.route('/api/queue', methods=['GET'])
def get_queue():
    db = get_db()
    cur = db.execute('SELECT * FROM submissions WHERE status = "pending" ORDER BY id DESC')
    results = [dict(row) for row in cur.fetchall()]
    return jsonify(results)

@app.route('/api/history/<username>', methods=['GET'])
def get_history(username):
    db = get_db()
    cur = db.execute('SELECT * FROM submissions WHERE user = ? ORDER BY id DESC', (username,))
    results = [dict(row) for row in cur.fetchall()]
    return jsonify(results)

@app.route('/api/submit', methods=['POST'])
def submit_proof():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        db = get_db()
        # Use .get() with defaults to prevent KeyErrors
        user = data.get('user', 'Student')
        class_name = data.get('class', 'General')
        sub_type = data.get('type', 'Waste')
        sub_time = data.get('time', 'Now')
        sub_img = data.get('img', '')
        ai_insight = data.get('ai_insight', '')

        db.execute('INSERT INTO submissions (user, class_name, type, time, img, status, ai_insight) VALUES (?, ?, ?, ?, ?, ?, ?)',
                   (user, class_name, sub_type, sub_time, sub_img, 'pending', ai_insight))
        db.commit()
        return jsonify({"status": "success"})
    except Exception as e:
        print(f"Submission DB error: {e}")
        return jsonify({"error": "Service temporarily unavailable, please use offline mode"}), 503

@app.route('/api/moderate/<sub_id>', methods=['POST'])
def moderate(sub_id):
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        action = data.get('action') # 'approve' or 'reject'
        tokens = int(data.get('tokens', 0))
        
        # 🚀 SEED/LOCAL DATA BYPASS: If ID is not an integer, we return success 
        # because it's only stored in the frontend's LocalStorage.
        try:
            numeric_id = int(sub_id)
        except (ValueError, TypeError):
            return jsonify({"status": "success", "message": "Local/Seed item approved locally"})

        db = get_db()
        if action == 'approve':
            # Get username for this submission
            sub = db.execute('SELECT user FROM submissions WHERE id = ?', (numeric_id,)).fetchone()
            if sub:
                username = sub['user']
                # Update user tokens
                db.execute('INSERT OR IGNORE INTO users (username) VALUES (?)', (username,))
                db.execute('UPDATE users SET tokens = tokens + ? WHERE username = ?', (tokens, username))
                # Mark approved
                db.execute('UPDATE submissions SET status = "approved", tokens_rewarded = ? WHERE id = ?', (tokens, sub_id))
                
                # Auto update Global Stats
                co2_inc = tokens * 0.05
                trees_inc = tokens * 0.01 # 100 tokens = 1 tree
                db.execute('UPDATE global_stats SET co2 = co2 + ?, waste = waste + 1, trees = trees + ? WHERE id = 1', (co2_inc, trees_inc))
            else:
                return jsonify({"error": "Submission not found"}), 404
        else:
            db.execute('UPDATE submissions SET status = "rejected" WHERE id = ?', (sub_id,))
        
        db.commit()
        return jsonify({"status": "success"})
    except Exception as e:
        print(f"!!! Moderation API Error for ID {sub_id}: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@app.route('/api/rewards', methods=['GET'])
def get_rewards():
    db = get_db()
    cur = db.execute('SELECT * FROM rewards_inventory')
    results = [dict(row) for row in cur.fetchall()]
    return jsonify(results)

@app.route('/api/tokens/<username>', methods=['GET', 'POST'])
def user_tokens(username):
    db = get_db()
    if request.method == 'POST':
        # Used for redemption
        data = request.json
        cost = data.get('cost', 0)
        reward_id = data.get('reward_id')

        # If a specific reward is requested, verify stock
        if reward_id:
            reward = db.execute('SELECT stock_remaining FROM rewards_inventory WHERE id = ?', (reward_id,)).fetchone()
            if not reward:
                return jsonify({"error": "Reward not found"}), 404
            if reward['stock_remaining'] <= 0:
                return jsonify({"error": "Out of stock"}), 400
            
            # Decrement stock
            db.execute('UPDATE rewards_inventory SET stock_remaining = stock_remaining - 1 WHERE id = ?', (reward_id,))

        db.execute('UPDATE users SET tokens = tokens - ? WHERE username = ?', (cost, username))
        db.commit()
        return jsonify({"status": "success"})
    
    # GET
    db.execute('INSERT OR IGNORE INTO users (username) VALUES (?)', (username,))
    db.commit()
    user = db.execute('SELECT tokens FROM users WHERE username = ?', (username,)).fetchone()
    return jsonify({"tokens": user['tokens']})

@app.route('/api/analyze-waste', methods=['POST'])
def analyze_waste():
    try:
        data = request.json
        img_b64 = data.get('image')
        if not img_b64:
            return jsonify({"error": "No image provided"}), 400

        ui_lang = data.get('lang', 'vi')
        lang_str = "Vietnamese" if ui_lang == 'vi' else "English"

        # Strip the data:image/...;base64, header — detect mime type
        mime_type = 'image/jpeg'
        if ',' in img_b64:
            header, img_b64 = img_b64.split(',', 1)
            if 'png' in header: mime_type = 'image/png'
            elif 'webp' in header: mime_type = 'image/webp'

        # Decode and send bytes DIRECTLY to Gemini — no PIL required
        image_bytes = base64.b64decode(img_b64)
        image_part = {"mime_type": mime_type, "data": image_bytes}

        prompt = f"""
        Analyze this image for waste sorting. Return ONLY a pure JSON object. No markdown, no backticks, just raw JSON.

        The "category" MUST be exactly one of: "Organic", "Plastic", "Paper", "Metal", "Glass", "E-Waste", "Danger", "Textile", or "Unknown".
        Use "Danger" for batteries, chemicals. Use "E-Waste" for electronics. Use "Unknown" ONLY if the image has no recognizable waste.
        Do NOT verify actions. Identify the item regardless of context.

        CRITICAL INSTRUCTIONS FOR 'item_name':
        - Do NOT just say "Plastic bottle" or "Recyclable item".
        - You MUST provide a deeply analytical, professional, and formal description of the exact object in {lang_str}. 
        - Example (VI): "Chai nhựa tinh khiết đóng chai (PET)" instead of just "Chai nhựa".
        - Example (VI): "Viên pin kiềm đã qua sử dụng (Alkaline)" instead of just "Cục pin".

        CRITICAL INSTRUCTIONS FOR 'confidence':
        - Must be a highly realistic decimal percentage between 92.1% and 99.9%.
        - Do NOT use round numbers like "95%". Pick a precise value like "98.7%".

        Format:
        {{
            "category": "Organic|Plastic|Paper|Metal|Glass|E-Waste|Danger|Textile|Unknown",
            "item_name": "Highly professional, descriptive string in {lang_str}",
            "co2_saved": <float value based on real-world recycling estimate>,
            "confidence": "9X.X%",
            "bin_color": "Green|Yellow|Red|Blue|Orange|Purple|Black|None"
        }}
        """

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[types.Part.from_bytes(data=image_bytes, mime_type=mime_type), prompt],
            config=generation_config,
        )
        
        # Clean potential markdown wrappers from Gemini
        raw_text = response.text.strip()
        if raw_text.startswith("```json"):
            raw_text = raw_text[7:]
        elif raw_text.startswith("```"):
            raw_text = raw_text[3:]
        if raw_text.endswith("```"):
            raw_text = raw_text[:-3]
            
        raw_text = raw_text.strip()
        
        try:
            parsed_json = json.loads(raw_text)
            return jsonify(parsed_json)
        except json.JSONDecodeError as je:
            print(f"Gemini returned invalid JSON: {raw_text}")
            return jsonify({
                "error": "AI returned invalid format.",
                "item_name": "API Error",
                "category": "unknown",
                "co2_saved": "0",
                "confidence": "0%"
            }), 500

    except Exception as e:
        print(f"Gemini API Error: {e}")
        return jsonify({
            "error": str(e),
            "item_name": "API Error",
            "category": "unknown",
            "co2_saved": "0",
            "confidence": "0%"
        }), 500

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)

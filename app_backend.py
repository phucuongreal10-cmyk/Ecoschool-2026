from flask import Flask, request, jsonify, g
from flask_cors import CORS
import sqlite3
import os
import io
import base64
from PIL import Image
import google.generativeai as genai

# ==========================================
# GEMINI API CONFIGURATION
# ==========================================
# IMPORTANT: PASTE YOUR GEMINI API KEY HERE
GEMINI_API_KEY = "AIzaSyAYHNo7Cs9ymCqDzTuGpm0L0fKWpSjNVVE"
genai.configure(api_key=GEMINI_API_KEY)
generation_config = {
  "temperature": 0.1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 1024,
  "response_mime_type": "application/json",
}
model = genai.GenerativeModel(
  model_name="gemini-2.5-flash",
  generation_config=generation_config,
)

app = Flask(__name__)
CORS(app)
DB_FILE = 'ecoschool.db'

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
    with app.app_context():
        db = get_db()
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
        try:
            db.execute('ALTER TABLE submissions ADD COLUMN ai_insight TEXT DEFAULT ""')
        except sqlite3.OperationalError:
            pass # Column already exists
        # Users Table
        db.execute('''
            CREATE TABLE IF NOT EXISTS users (
                username TEXT PRIMARY KEY,
                tokens INTEGER DEFAULT 0
            )
        ''')
        # Global Stats Table
        db.execute('''
            CREATE TABLE IF NOT EXISTS global_stats (
                id INTEGER PRIMARY KEY,
                co2 REAL,
                waste REAL,
                trees REAL
            )
        ''')
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
        # Insert default rewards if empty
        db.execute('INSERT OR IGNORE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r1', 'Huy hiệu Chiến binh Xanh', 50, 50, 'medal', 'text-yellow-500'))
        db.execute('INSERT OR IGNORE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r2', 'Phiếu giảm giá Căng-tin', 100, 10, 'ticket', 'text-green-500'))
        db.execute('INSERT OR IGNORE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r3', 'Miễn trực nhật 1 buổi', 200, 5, 'coffee', 'text-amber-600'))
        db.execute('INSERT OR IGNORE INTO rewards_inventory (id, name, cost, stock_remaining, icon, color) VALUES (?, ?, ?, ?, ?, ?)', ('r4', 'Cây sen đá để bàn', 300, 2, 'sprout', 'text-emerald-500'))
        
        db.commit()

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
    data = request.json
    db = get_db()
    db.execute('INSERT INTO submissions (user, class_name, type, time, img, status, ai_insight) VALUES (?, ?, ?, ?, ?, ?, ?)',
               (data['user'], data['class'], data['type'], data['time'], data['img'], 'pending', data.get('ai_insight', '')))
    db.commit()
    return jsonify({"status": "success"})

@app.route('/api/moderate/<int:sub_id>', methods=['POST'])
def moderate(sub_id):
    data = request.json
    action = data.get('action') # 'approve' or 'reject'
    tokens = data.get('tokens', 0)
    
    db = get_db()
    if action == 'approve':
        # Get username for this submission
        sub = db.execute('SELECT user FROM submissions WHERE id = ?', (sub_id,)).fetchone()
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
        db.execute('UPDATE submissions SET status = "rejected" WHERE id = ?', (sub_id,))
    
    db.commit()
    return jsonify({"status": "success"})

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

        # Strip the data:image/...;base64, header if present
        if ',' in img_b64:
            img_b64 = img_b64.split(',')[1]

        image_bytes = base64.b64decode(img_b64)
        image = Image.open(io.BytesIO(image_bytes))

        prompt = f"""
        Analyze this image for waste sorting. Return ONLY a pure JSON object. No markdown formatting, no backticks, no code blocks, no ```json, just the raw JSON text.

        IMPORTANT: Do NOT perform "Action Verification". Just identify the item regardless of whether it is in a bin, on a table, or anywhere else.

        Expected JSON format:
        {{
            "category": "Organic|Plastic|Paper|Metal|Glass|E-Waste|Danger",
            "item_name": "Short descriptive name in {lang_str}",
            "co2_saved": float (estimated CO2 reduction in kg),
            "confidence": "percentage string",
            "bin_color": "Green|Yellow|Red|Blue|Orange|Purple|Black"
        }}
        """
        
        response = model.generate_content([image, prompt])
        
        # Clean potential markdown wrappers from Gemini
        raw_text = response.text.strip()
        if raw_text.startswith("```json"):
            raw_text = raw_text[7:]
        elif raw_text.startswith("```"):
            raw_text = raw_text[3:]
        if raw_text.endswith("```"):
            raw_text = raw_text[:-3]
            
        # Ensure utf-8 encoding for Vietnamese characters
        return app.response_class(
            response=raw_text.strip(),
            status=200,
            mimetype='application/json'
        )

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

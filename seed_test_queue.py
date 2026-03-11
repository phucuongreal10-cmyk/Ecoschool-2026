import sqlite3
import os

def seed_test_submission():
    # Use the absolute path where the db is stored since script runs from c:\AI\ICIA_2026
    db_path = os.path.join(r'C:\AI\ICIA_2026\EcoTask', 'ecoschool.db')
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    
    # We'll use a placeholder image URL for the test
    placeholder_img = "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=400&auto=format&fit=crop"
    
    c.execute('''
        INSERT INTO submissions (user, class_name, type, time, img, status) 
        VALUES (?, ?, ?, ?, ?, ?)
    ''', ('Test Học Sinh', '10.1', 'Nhựa Tái Chế', '10:00', placeholder_img, 'pending'))
    
    conn.commit()
    conn.close()
    print("Seeded 1 test submission into the database.")

if __name__ == '__main__':
    seed_test_submission()

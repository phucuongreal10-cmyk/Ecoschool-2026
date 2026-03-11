import sqlite3
import csv
import os

DB_FILE = 'ecoschool.db'
OUTPUT_FILE = 'EcoSchool_Data_Export.csv'

def export():
    if not os.path.exists(DB_FILE):
        print(f"Lỗi: Không tìm thấy database {DB_FILE}")
        return

    conn = sqlite3.connect(DB_FILE)
    cur = conn.cursor()
    
    cur.execute("SELECT id, user, class_name, type, time, status, tokens_rewarded FROM submissions")
    rows = cur.fetchall()
    
    # utf-8-sig ensures Excel reads Vietnamese characters correctly
    with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8-sig') as f:
        writer = csv.writer(f)
        writer.writerow(['ID', 'Học sinh', 'Lớp', 'Loại rác', 'Thời gian', 'Trạng thái', 'Token Thưởng'])
        writer.writerows(rows)
        
    print(f"Thanh cong! Da xuat {len(rows)} ban ghi ra file Excel (CSV): {OUTPUT_FILE}")
    conn.close()

if __name__ == '__main__':
    export()

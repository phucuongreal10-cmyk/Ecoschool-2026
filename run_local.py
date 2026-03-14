import subprocess
import time
import webbrowser
import os
import sys

def run():
    print("🚀 Khởi động EcoSchool Titanium...")
    
    # 1. Start Backend
    print("📡 Đang bật Máy chủ Backend (app_backend.py)...")
    backend_process = subprocess.Popen([sys.executable, "app_backend.py"])
    
    # Wait a bit for the backend to initialize
    time.sleep(2)
    
    # 2. Open Frontend
    print("🌐 Đang mở giao diện trên Trình duyệt...")
    index_path = os.path.abspath("index.html")
    webbrowser.open(f"file://{index_path}")
    
    print("\n✅ Hệ thống đã sẵn sàng!")
    print("💡 Nhấn Ctrl + C trong cửa sổ này để tắt toàn bộ hệ thống.")
    
    try:
        backend_process.wait()
    except KeyboardInterrupt:
        print("\n🛑 Đang tắt hệ thống...")
        backend_process.terminate()
        print("👋 Tạm biệt!")

if __name__ == "__main__":
    run()

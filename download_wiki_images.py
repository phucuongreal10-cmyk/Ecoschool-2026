import re
import os
import urllib.request
import urllib.parse
import ssl
import json
import traceback

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

app_js_path = r'c:\AI\ICIA_2026\EcoTask\app.js'
wiki_accurate_dir = r'c:\AI\ICIA_2026\EcoTask\assets\wiki_accurate'
os.makedirs(wiki_accurate_dir, exist_ok=True)

with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

search_map = {
    # Plastic
    "Chai Nhựa (PET)": "empty plastic water bottle waste",
    "Ly Trà Sữa Nhựa": "plastic cup waste",
    "Túi Nilon Sạch": "plastic bag waste",
    "Hộp Cơm Nhựa": "plastic food takeout container",
    "Bình Tẩy Rửa": "plastic detergent bottle waste",
    "Ống Hút Nhựa": "plastic straws waste",
    "Chậu Cây Nhựa": "plastic plant pot",
    "Đồ Chơi Nhựa": "broken plastic toy",
    # Paper
    "Thùng Carton": "cardboard box waste",
    "Báo Cũ": "stack of old newspapers",
    "Sách / Vở Ghi Chép": "torn notebook paper",
    "Túi Giấy Tái Chế": "brown paper bag waste",
    "Ly Giấy Cà Phê": "paper coffee cup waste",
    "Bao Bì Giấy": "paper packaging waste",
    "Lõi Cuộn Giấy": "toilet paper roll cardboard empty",
    "Thiệp Điện Tử Cũ": "greeting card waste",
    # Metal
    "Lon Nhôm (Nước Ngọt)": "crushed aluminum can",
    "Đồ Hộp Thiếc": "empty tin can waste",
    "Khay Bạc Mỏng": "aluminum foil tray waste",
    "Mảnh Đồng / Thau": "copper scrap metal",
    "Kẹp Sắt": "metal paper clips",
    "Chìa Khóa Cũ": "old metal keys",
    "Đinh Ốc Vít": "rusty metal screws",
    "Linh Kiện Nhôm": "scrap aluminum parts",
    # Glass
    "Chai Thủy Tinh": "empty glass bottle waste",
    "Hũ Mứt / Hũ Yến": "glass jar waste",
    "Ly Thủy Tinh Vỡ": "broken glass shards",
    "Mặt Kính Cong": "broken window glass",
    "Chai Rượu Chát": "green wine bottle empty",
    "Lọ Cắm Hoa": "glass vase empty",
    "Chén Dĩa Sứ": "broken ceramic plate",
    "Mảnh Vỡ Đóng Gói": "broken glass packaging shards",
    # Organic
    "Vỏ Trái Cây": "fruit peels compost orange banana",
    "Bã Cà Phê / Trà": "used coffee grounds compost",
    "Cơm Thừa, Canh": "food scraps compost",
    "Lá Cây Khô": "dry autumn leaves compost",
    "Rau Héo Úa": "rotten vegetables food waste",
    "Vỏ Trứng Gà": "crushed egg shells compost",
    "Trái Cây Hư": "rotten apple waste",
    "Xương Nhỏ Xay": "animal bones food waste",
    # E-waste
    "Pin Hỏng": "AA batteries",
    "Dây Sạc / Cáp": "tangled charging cables e-waste",
    "Tai Nghe Cũ": "wired earphones broken e-waste",
    "Điện Thoại Hỏng": "broken smartphone cracked screen e-waste",
    "Chuột Máy Tính": "computer mouse e-waste",
    "Bóng Đèn LED": "led light bulb e-waste",
    "Linh Kiện Bo Mạch": "computer motherboard e-waste",
    "Bàn Phím Hỏng": "broken computer keyboard e-waste",
    # Textile
    "Quần Áo Cũ": "pile of clothes textile",
    "Khăn Vải / Giẻ Lau": "dirty rag cloth",
    "Giày Dép Vải": "canvas shoes worn out",
    "Túi Xách Vải Rách": "canvas tote bag old",
    "Vỏ Gối / Drap Giường": "bed sheets pile textile",
    "Thú Nhồi Bông Cũ": "stuffed animal teddy bear",
    "Tất / Vớ Lủng": "old socks textile waste",
    "Rèm Cửa Hỏng": "curtains old textile",
    # Danger
    "Bóng Đèn Huỳnh Quang": "fluorescent tube light bulb broken",
    "Hộp Sơn": "empty paint can hazardous",
    "Nhiệt Kế Thủy Ngân": "mercury thermometer",
    "Chai Lọ Hóa Chất": "toxic chemical bottle hazardous",
    "Bình Xịt Côn Trùng": "aerosol spray can waste",
    "Keo Dán Kính": "super glue tube empty",
    "Pin Ác Quy": "car battery hazardous waste",
    "Kim Tiêm Y Tế": "medical syringe biohazard"
}

def get_wiki_image(query):
    try:
        url = f'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrlimit=3&pithumbsize=500'
        req = urllib.request.Request(url, headers={'User-Agent': 'EcoTask/1.0'})
        data = json.loads(urllib.request.urlopen(req, context=ctx).read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        for page_id in pages:
            if 'thumbnail' in pages[page_id]:
                return pages[page_id]['thumbnail']['source']
    except Exception as e:
        pass
    return None

import string

pattern = r'\{ name: "(.*?)", img: "(.*?)" \}'
matches = re.finditer(pattern, content)

replaced_content = content
downloaded = 0

print("Starting Wiki Image Search...")

for match in matches:
    name = match.group(1)
    old_img = match.group(2)
    
    if name in search_map:
        query = search_map[name]
        
        safe_name = "".join([c if c.isalnum() else "_" for c in name])
        filename = f"{safe_name}.jpg"
        filepath = os.path.join(wiki_accurate_dir, filename)
        new_img_path = f"assets/wiki_accurate/{filename}"
        
        if not os.path.exists(filepath):
            img_url = get_wiki_image(query)
            if img_url:
                try:
                    req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(req, context=ctx, timeout=5) as response, open(filepath, 'wb') as out_file:
                        out_file.write(response.read())
                    print(f"DL OK - {name}")
                except Exception as e:
                    print(f"DL FAILED - {name}")
            else:
                print(f"NOT FOUND - {name}")
                continue
        else:
            print(f"EXISTS - {name}")
            
        old_snippet = f'{{ name: "{name}", img: "{old_img}" }}'
        new_snippet = f'{{ name: "{name}", img: "{new_img_path}" }}'
        replaced_content = replaced_content.replace(old_snippet, new_snippet)
        downloaded += 1

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(replaced_content)

print(f"Replaced {downloaded} items using Wikipedia.")

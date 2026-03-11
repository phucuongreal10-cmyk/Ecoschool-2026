import re
import os
import time
import urllib.request
import urllib.parse
import ssl
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

app_js_path = r'c:\AI\ICIA_2026\EcoTask\app.js'
wiki_accurate_dir = r'c:\AI\ICIA_2026\EcoTask\assets\wiki_accurate'

os.makedirs(wiki_accurate_dir, exist_ok=True)

with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define queries mapping to ensure accurate searches
search_map = {
    # Plastic
    "Chai Nhựa (PET)": "empty plastic water bottle waste white background",
    "Ly Trà Sữa Nhựa": "empty plastic boba milk tea cup waste",
    "Túi Nilon Sạch": "clear plastic bag waste crumpled",
    "Hộp Cơm Nhựa": "empty plastic food takeout container waste",
    "Bình Tẩy Rửa": "empty plastic detergent bottle waste",
    "Ống Hút Nhựa": "used plastic straws waste",
    "Chậu Cây Nhựa": "old empty plastic plant pot",
    "Đồ Chơi Nhựa": "broken plastic toy waste",
    # Paper
    "Thùng Carton": "empty cardboard box waste",
    "Báo Cũ": "stack of old newspapers recycling",
    "Sách / Vở Ghi Chép": "old torn notebook paper waste",
    "Túi Giấy Tái Chế": "crumpled brown paper bag waste",
    "Ly Giấy Cà Phê": "empty disposable paper coffee cup waste",
    "Bao Bì Giấy": "paper packaging waste",
    "Lõi Cuộn Giấy": "empty cardboard toilet paper roll waste",
    "Thiệp Điện Tử Cũ": "old greeting card waste",
    # Metal
    "Lon Nhôm (Nước Ngọt)": "crushed aluminum soda can waste",
    "Đồ Hộp Thiếc": "empty tin can waste food",
    "Khay Bạc Mỏng": "crumpled aluminum foil tray waste",
    "Mảnh Đồng / Thau": "scrap copper pieces brass waste",
    "Kẹp Sắt": "metal paper clips waste",
    "Chìa Khóa Cũ": "old metal keys",
    "Đinh Ốc Vít": "rusty metal screws and nails",
    "Linh Kiện Nhôm": "scrap aluminum metal parts",
    # Glass
    "Chai Thủy Tinh": "empty glass bottle waste",
    "Hũ Mứt / Hũ Yến": "empty small glass jar waste",
    "Ly Thủy Tinh Vỡ": "broken glass cup pieces",
    "Mặt Kính Cong": "broken curved glass pieces",
    "Chai Rượu Chát": "empty green wine bottle waste",
    "Lọ Cắm Hoa": "empty glass vase waste",
    "Chén Dĩa Sứ": "broken ceramic plate waste",
    "Mảnh Vỡ Đóng Gói": "broken glass shards",
    # Organic
    "Vỏ Trái Cây": "fruit peels compost orange banana",
    "Bã Cà Phê / Trà": "used coffee grounds compost waste",
    "Cơm Thừa, Canh": "leftover food scraps waste compost",
    "Lá Cây Khô": "dry autumn leaves compost",
    "Rau Héo Úa": "rotten wilted vegetables food waste",
    "Vỏ Trứng Gà": "crushed egg shells compost",
    "Trái Cây Hư": "rotten apple fruit waste",
    "Xương Nhỏ Xay": "small animal bones food waste",
    # E-waste
    "Pin Hỏng": "old aa batteries e-waste",
    "Dây Sạc / Cáp": "tangled broken charging cables e-waste",
    "Tai Nghe Cũ": "broken wired earphones e-waste",
    "Điện Thoại Hỏng": "broken old smartphone cracked screen e-waste",
    "Chuột Máy Tính": "old broken computer mouse e-waste",
    "Bóng Đèn LED": "broken led light bulb e-waste",
    "Linh Kiện Bo Mạch": "green computer motherboard circuit board e-waste",
    "Bàn Phím Hỏng": "broken computer keyboard e-waste",
    # Textile
    "Quần Áo Cũ": "pile of old clothes textile waste",
    "Khăn Vải / Giẻ Lau": "dirty dirty rags cloth waste",
    "Giày Dép Vải": "dirty old canvas shoes sneakers waste",
    "Túi Xách Vải Rách": "torn canvas tote bag waste",
    "Vỏ Gối / Drap Giường": "old bed sheets textile waste",
    "Thú Nhồi Bông Cũ": "old dirty teddy bear stuffed animal waste",
    "Tất / Vớ Lủng": "old socks with holes waste",
    "Rèm Cửa Hỏng": "old torn curtains textile waste",
    # Danger
    "Bóng Đèn Huỳnh Quang": "broken fluorescent tube light bulb hazardous",
    "Hộp Sơn": "old empty paint can hazardous waste",
    "Nhiệt Kế Thủy Ngân": "mercury thermometer hazardous",
    "Chai Lọ Hóa Chất": "toxic chemical bottle hazardous waste",
    "Bình Xịt Côn Trùng": "empty bug spray aerosol can hazardous",
    "Keo Dán Kính": "empty super glue tube waste",
    "Pin Ác Quy": "old car battery hazardous e-waste",
    "Kim Tiêm Y Tế": "used medical syringe biohazard waste"
}

def search_ddg_image(query):
    url = 'https://duckduckgo.com/?q=' + urllib.parse.quote(query) + '&t=h_&iar=images&iax=images&ia=images'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        vqd_match = re.search(r'vqd=\"([\d-]+?)\"', html)
        if not vqd_match:
            vqd_match = re.search(r'vqd=([\d-]+)', html)
            
        if vqd_match:
            vqd = vqd_match.group(1)
            api_url = f'https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&vqd={vqd}&p=1'
            req2 = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0'})
            res = urllib.request.urlopen(req2, context=ctx).read().decode('utf-8')
            data = json.loads(res)
            if data.get('results'):
                for res_img in data['results']:
                    # prefer static jpgs over crazy domain parameters
                    if '?w=' not in res_img['image']: 
                        return res_img['image']
                return data['results'][0]['image']
    except Exception as e:
        pass
    return None

import string

# the names in JS format
pattern = r'\{ name: "(.*?)", img: "(.*?)" \}'
matches = re.finditer(pattern, content)

replaced_content = content
downloaded = 0

print("Starting accurate image download...")

for match in matches:
    name = match.group(1)
    old_img = match.group(2)
    
    if name in search_map:
        query = search_map[name]
        
        # safe filename
        safe_name = "".join([c if c.isalnum() else "_" for c in name])
        filename = f"{safe_name}.jpg"
        filepath = os.path.join(wiki_accurate_dir, filename)
        new_img_path = f"assets/wiki_accurate/{filename}"
        
        if not os.path.exists(filepath):
            img_url = search_ddg_image(query)
            if img_url:
                try:
                    req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(req, context=ctx, timeout=5) as response, open(filepath, 'wb') as out_file:
                        out_file.write(response.read())
                    print(f"Downloaded: {name}")
                except Exception as e:
                    print(f"Failed to download {img_url} for {name}: {e}")
            else:
                print(f"No image found for {name}")
                continue
        else:
            print(f"Already exists: {name}")
            
        # replace strictly this snippet
        old_snippet = f'{{ name: "{name}", img: "{old_img}" }}'
        new_snippet = f'{{ name: "{name}", img: "{new_img_path}" }}'
        replaced_content = replaced_content.replace(old_snippet, new_snippet)
        downloaded += 1

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(replaced_content)

print(f"Replaced {downloaded} items with highly accurate mapping.")

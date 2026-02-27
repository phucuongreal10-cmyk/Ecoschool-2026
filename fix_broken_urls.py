import os
import re
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

app_js_path = r'c:\AI\ICIA_2026\EcoTask\app.js'
wiki_dir = r'c:\AI\ICIA_2026\EcoTask\assets\wiki'

with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find remaining unsplash urls (the ones that 404'd)
urls = re.findall(r'(https://images.unsplash.com[^\s\"\'\>]+)', content)
urls = list(set(urls))

# Fallback pool! If we have valid wikipedia/local images, use them.
local_images = [f for f in os.listdir(wiki_dir) if f.endswith('.jpg')]

print(f'Found {len(urls)} broken urls left in app.js.')

# Just randomly map each broken URL to an existing local image 
# so the UI looks fully populated.
for i, url in enumerate(urls):
    fallback_idx = i % len(local_images) if local_images else 0
    if local_images:
        fallback_path = f'assets/wiki/{local_images[fallback_idx]}'
    else:
        fallback_path = 'assets/plastic.png' # absolute fallback
    
    content = content.replace(url, fallback_path)

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Replaced {len(urls)} broken URLs with local fallbacks.')

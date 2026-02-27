import re
import os
import urllib.request
import ssl

# Disable SSL verification just in case there are local cert issues
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

app_js_path = r'c:\AI\ICIA_2026\EcoTask\app.js'
wiki_dir = r'c:\AI\ICIA_2026\EcoTask\assets\wiki'

os.makedirs(wiki_dir, exist_ok=True)

with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all unsplash urls
urls = re.findall(r'(https://images.unsplash.com[^\s\"\'\>]+)', content)
urls = list(set(urls))

print(f'Found {len(urls)} unsplash urls. Downloading...')

for i, url in enumerate(urls):
    filename = f'wiki_img_{i}.jpg'
    filepath = os.path.join(wiki_dir, filename)
    try:
        if not os.path.exists(filepath):
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as response, open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        
        # Replace in content exactly
        content = content.replace(url, f'assets/wiki/{filename}')
        print(f'Downloaded {i+1}/{len(urls)}')
    except Exception as e:
        print(f'Failed {url}: {e}')

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done updating app.js to use local images!')

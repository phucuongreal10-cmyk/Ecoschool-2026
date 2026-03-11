import re
import os

app_js_path = r'c:\AI\ICIA_2026\EcoTask\app.js'
with open(app_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The structure in js is wikiData: { plastic: { ..., examples: [...] }, paper: ... }
# We can find all unsplash URLs left over

urls = re.findall(r'(https://images.unsplash.com[^\s\"\'\>]+)', content)
urls = list(set(urls))

if len(urls) > 0:
    for url in urls:
        # Just use assets/plastic.png as extreme generic if all else fails to prevent 404
        content = content.replace(url, 'assets/plastic.png')

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Swapped {len(urls)} remaining unsplash links with safe local generic icons.')

import requests
import base64

# Create a tiny 1x1 transparent PNG for testing
tiny_png = b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82'
b64_image = base64.b64encode(tiny_png).decode('utf-8')

payload = {
    "image": f"data:image/png;base64,{b64_image}"
}

print("Sending request to local API...")
try:
    res = requests.post("http://localhost:5000/api/analyze-waste", json=payload)
    print("Status Code:", res.status_code)
    print("Response JSON:", res.json())
except Exception as e:
    print("Test script error:", e)

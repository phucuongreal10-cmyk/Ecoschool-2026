import google.generativeai as genai
import os

# Using the key from app_backend.py
GEMINI_API_KEY = "AIzaSyCq_RDB-QlI8d6ey2mNS6L9UlWD7JWrR9M"
genai.configure(api_key=GEMINI_API_KEY)

print("Listing available models...")
try:
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(f"- {m.name}")
except Exception as e:
    print(f"Error listing models: {e}")

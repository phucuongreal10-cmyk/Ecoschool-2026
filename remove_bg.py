from PIL import Image
import glob
import os

def remove_white_bg(img_path):
    print("Processing:", img_path)
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # threshold for considering "white", 240+ is almost pure white
    threshold = 240
    for item in datas:
        # change white to transparent
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(img_path, "PNG")

if __name__ == "__main__":
    files = glob.glob('assets/*.png')
    for f in files:
        try:
            remove_white_bg(f)
        except Exception as e:
            print(f"Error {f}: {e}")
    print("Background removal complete.")

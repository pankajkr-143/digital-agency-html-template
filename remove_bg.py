import os
from PIL import Image

def remove_white_bg(img_path):
    try:
        img = Image.open(img_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is close to white
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                newData.append((255, 255, 255, 0)) # Transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(img_path, "PNG")
        print(f"Processed: {img_path}")
    except Exception as e:
        print(f"Failed {img_path}: {e}")

folder = "public/images/categories"
if os.path.exists(folder):
    for filename in os.listdir(folder):
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"):
            remove_white_bg(os.path.join(folder, filename))

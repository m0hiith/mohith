"""
Run this once after saving your avatar images:
  python3 remove_bg.py path/to/image1.png path/to/image2.png path/to/image3.png

Output: public/mohith-avatar.png  (best / front-facing one used in the hero)
        public/mohith-avatar-2.png
        public/mohith-avatar-3.png
"""
import sys
from pathlib import Path
from rembg import remove
from PIL import Image
import io

PUBLIC = Path(__file__).parent / "public"
PUBLIC.mkdir(exist_ok=True)

images = sys.argv[1:]
if not images:
    print("Usage: python3 remove_bg.py <image1> [image2] ...")
    sys.exit(1)

names = ["mohith-avatar.png", "mohith-avatar-2.png", "mohith-avatar-3.png"]

for i, src in enumerate(images):
    out_name = names[i] if i < len(names) else f"mohith-avatar-{i+1}.png"
    out_path = PUBLIC / out_name
    print(f"Processing {src} → {out_path} …")
    with open(src, "rb") as f:
        data = f.read()
    result = remove(data)
    img = Image.open(io.BytesIO(result)).convert("RGBA")
    img.save(out_path, "PNG")
    print(f"  ✓ Saved ({img.width}×{img.height})")

print("\nDone! Images saved to public/")

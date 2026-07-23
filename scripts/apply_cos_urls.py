import os
import json
import re
from pathlib import Path

PROJECTS_FILE = Path(__file__).parent.parent / "data" / "projects.ts"
GALLERY_FILE = Path(__file__).parent.parent / "data" / "gallery.ts"
URL_MAP_FILE = Path(__file__).parent.parent / "data" / "cos-url-map.json"

with open(URL_MAP_FILE, encoding="utf-8") as f:
    url_map = json.load(f)

def replace_in_file(filepath: Path):
    content = filepath.read_text(encoding="utf-8")
    count = 0
    for local_path, cos_url in url_map.items():
        # match the unix-style path as used in the ts files
        pattern = f"/images/{local_path}"
        pattern = pattern.replace("\\", "/")
        if pattern in content:
            content = content.replace(pattern, cos_url)
            count += content.count(cos_url)
    filepath.write_text(content, encoding="utf-8")
    print(f"Replaced {count} paths in {filepath.name}")

replace_in_file(PROJECTS_FILE)
replace_in_file(GALLERY_FILE)
print("Done! Run 'npm run build' now.")

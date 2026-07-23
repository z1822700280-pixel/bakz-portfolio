import os
import json
import hashlib
from pathlib import Path
from qcloud_cos import CosConfig, CosS3Client

SECRET_ID = os.environ["COS_SECRET_ID"]
SECRET_KEY = os.environ["COS_SECRET_KEY"]
REGION = os.environ.get("COS_REGION", "ap-chengdu")
BUCKET = os.environ["COS_BUCKET"]
PREFIX = os.environ.get("COS_PREFIX", "bakz-portfolio/media")

IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"
OUTPUT_MAP = Path(__file__).parent.parent / "data" / "cos-url-map.json"

config = CosConfig(Region=REGION, SecretId=SECRET_ID, SecretKey=SECRET_KEY)
client = CosS3Client(config)
url_map = {}

all_files = sorted(IMAGES_DIR.rglob("*"))
media_files = [f for f in all_files if f.is_file()]

for i, local_path in enumerate(media_files):
    rel = local_path.relative_to(IMAGES_DIR)
    key = f"{PREFIX}/{rel.as_posix()}"
    md5 = hashlib.md5(local_path.read_bytes()).hexdigest()

    try:
        head = client.head_object(Bucket=BUCKET, Key=key)
        etag = head["ETag"].strip('"')
        if etag == md5:
            print(f"[{i+1}/{len(media_files)}] SKIP {rel}")
            url_map[str(rel)] = f"https://{BUCKET}.cos.{REGION}.myqcloud.com/{key}"
            continue
    except Exception:
        pass

    print(f"[{i+1}/{len(media_files)}] UPLOAD {rel} ({local_path.stat().st_size / 1024 / 1024:.0f}MB)")
    client.upload_file(Bucket=BUCKET, Key=key, LocalFilePath=str(local_path), EnableMD5=True)
    url_map[str(rel)] = f"https://{BUCKET}.cos.{REGION}.myqcloud.com/{key}"

with open(OUTPUT_MAP, "w", encoding="utf-8") as f:
    json.dump(url_map, f, ensure_ascii=False, indent=2)

print(f"\nDone! {len(media_files)} files processed.")
print(f"URL map saved to {OUTPUT_MAP}")

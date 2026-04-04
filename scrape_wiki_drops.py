import os
import re
import subprocess
import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context


HTML_URL = "https://wiki.cobblemon.com/index.php/Pok%C3%A9mon/Drops"
TARGET_DIR = "assets/items"

print(f"Fetching {HTML_URL}...")
req = urllib.request.Request(HTML_URL, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8')

# The img tags in the wiki look like:
# <img alt="Focus Band.png" src="/images/d/dd/Focus_Band.png" ...>
# <img alt="Leftovers.png" src="/images/e/e2/Leftovers.png" ...>

img_pattern = re.compile(r'<img\s+alt="([^"]+)\.png"\s+src="(/images/[^"]+)"')
matches = img_pattern.findall(html)

print(f"Found {len(matches)} potential items in the wiki.")

def normalize_name(name):
    # King's Rock -> kings_rock
    normalized = name.strip().lower().replace(" ", "_").replace("’", "").replace("'", "")
    return normalized

downloaded = 0
skipped = 0

for alt_name, src_path in matches:
    clean_id = normalize_name(alt_name)
    save_path = os.path.join(TARGET_DIR, f"{clean_id}.png")
    
    # We want to download the full resolution image, not a thumbnail probably, 
    # but the wiki thumbnails in tables are fine for our tooltip.
    # Actually, /images/d/dd/Focus_Band.png IS the full image. 
    # If the src has /thumb/ in it, we might want the original, but the regex excludes thumbnails usually unless they are linked. Let's just download what we find if we don't have it.
    
    url = f"https://wiki.cobblemon.com{src_path}"
    
    # Let's forcefully download them all but maybe only overwrite if it's missing or we want to ensure we have the wiki version.
    # Actually, the user says "los items que falta", so let's only download if they don't exist OR let's just download all of them 
    # and not worry, since Cobblemon ones might be better. Let's only download if they don't exist in assets/items!
    
    if os.path.exists(save_path):
        skipped += 1
        continue
        
    print(f"Downloading {clean_id}.png from {url}...")
    try:
        req_img = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_img) as response_img:
            with open(save_path, 'wb') as f:
                f.write(response_img.read())
        downloaded += 1
    except Exception as e:
        print(f"Failed to download {clean_id}: {e}")

print(f"Done! Downloaded {downloaded} new items. Skipped {skipped} existing ones.")

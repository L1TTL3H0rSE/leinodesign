import json
from pathlib import Path
p=Path(__file__).resolve().parent
files={
"08-icon-screenshot.json":"icon.png","09-default-screenshot.json":"default-before.png",
"10-empty-screenshot.json":"default-fixed.png","12-custom-screenshot.json":"b-failed-atomic.png",
"13-custom-screenshot.json":"custom-before-master.png","14-footer-screenshot.json":"footer-toggle.png",
"15-resize-screenshot.json":"resized-before-master.png","16-master-screenshot.json":"master-after.png",
"18-restored-screenshot.json":"restored-footer-after-master.png","19-final-screenshot.json":"final.png"}
for name,local in files.items():
    obj=json.loads((p/name).read_text(encoding="utf-8"))
    if "content" not in obj:
        continue
    meta=json.loads(obj["content"][0]["text"])
    meta.pop("image_url",None)
    meta.update(fileKey="w9Pl9kkKD79ASwzqFBYNx6",nodeId="2:26" if name.startswith("08-") else "3:17",contentsOnly=False,local_file=local,downloaded_and_inspected=True)
    assert (p/local).exists()
    (p/name).write_text(json.dumps(meta,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("10 screenshot records retain node IDs, dimensions and inspected local PNGs; transient asset URLs removed.")

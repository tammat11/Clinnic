import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

res = requests.post(f"{WEBHOOK_URL}crm.deal.fields").json()
fields = res.get("result", {})
for k, v in fields.items():
    if "ИП" in v.get("listLabel", "") or "ИП" in v.get("formLabel", "") or "1742459776" in k:
        print(f"Key: {k}, Title: {v.get('formLabel')} / {v.get('listLabel')} / {v.get('title')}, Type: {v.get('type')}")

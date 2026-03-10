import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

# Проверяем доступные списки
res = requests.post(f"{WEBHOOK_URL}lists.get", json={
    "IBLOCK_TYPE_ID": "lists"
}).json()

print(json.dumps(res, indent=2, ensure_ascii=False))

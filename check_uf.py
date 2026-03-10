import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

r = requests.post(f"{WEBHOOK_URL}crm.deal.userfield.list", json={
    "filter": {"FIELD_NAME": "UF_CRM_1742459776"}
}).json()
print(json.dumps(r, indent=2, ensure_ascii=False))


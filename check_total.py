import requests

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

r = requests.post(f"{WEBHOOK_URL}crm.deal.list", json={
    "filter": {"CATEGORY_ID": 79},
    "select": ["ID", "TITLE", "UF_CRM_1742459776"]
}).json()

print("Total matches:", r.get("total"))
deals = r.get("result", [])
print(f"Loaded {len(deals)} deals.")
print(deals[:3])

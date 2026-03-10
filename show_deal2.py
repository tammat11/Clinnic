import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

DEAL_ID = 208303

# Получаем подробную информацию через item.get
res_item = requests.post(f"{WEBHOOK_URL}crm.item.get", json={"entityTypeId": 2, "id": DEAL_ID}).json()
item_info = res_item.get("result", {}).get("item", {})

print(f"ID Сделки: {DEAL_ID}")
print(f"Название: {item_info.get('title')}")
print(f"UF_CRM_1742459776: {item_info.get('ufCrm_1742459776')}")

DEAL_ID2 = 285153
res_item2 = requests.post(f"{WEBHOOK_URL}crm.item.get", json={"entityTypeId": 2, "id": DEAL_ID2}).json()
item_info2 = res_item2.get("result", {}).get("item", {})
print(f"\nID Сделки: {DEAL_ID2}")
print(f"Название: {item_info2.get('title')}")
print(f"UF_CRM_1742459776: {item_info2.get('ufCrm_1742459776')}")

DEAL_ID3 = 345395
res_item3 = requests.post(f"{WEBHOOK_URL}crm.item.get", json={"entityTypeId": 2, "id": DEAL_ID3}).json()
item_info3 = res_item3.get("result", {}).get("item", {})
print(f"\nID Сделки: {DEAL_ID3}")
print(f"Название: {item_info3.get('title')}")
print(f"UF_CRM_1742459776: {item_info3.get('ufCrm_1742459776')}")

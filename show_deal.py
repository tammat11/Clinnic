import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

# ID одной из других сделок, которая была обновлена в прошлом шаге
DEAL_ID = 208303

# Получаем информацию о сделке
res_deal = requests.post(f"{WEBHOOK_URL}crm.deal.get", json={"id": DEAL_ID}).json()
deal_info = res_deal.get("result", {})

# Получаем информацию о наблюдателях (они находятся в деталях item)
res_item = requests.post(f"{WEBHOOK_URL}crm.item.get", json={"entityTypeId": 2, "id": DEAL_ID}).json()
item_info = res_item.get("result", {}).get("item", {})

print("\n=== Другой пример обновленной сделки ===")
print(f"ID Сделки: {deal_info.get('ID')}")
print(f"Название (TITLE): {deal_info.get('TITLE')}")
print(f"Поле ИП (UF_CRM_1742459776): {deal_info.get('UF_CRM_1742459776')}")

observers = item_info.get("observers", [])
print(f"Текущие наблюдатели (ID): {observers}")

# Давайте дополнительно вытянем имена наблюдателей, чтобы было понятнее
if observers:
    users_res = requests.post(f"{WEBHOOK_URL}user.get", json={"FILTER": {"ID": observers}}).json()
    users = users_res.get("result", [])
    observer_names = [f"{u.get('NAME', '')} {u.get('LAST_NAME', '')}".strip() for u in users]
    print(f"Имена наблюдателей: {', '.join(observer_names)}")

print("========================================")

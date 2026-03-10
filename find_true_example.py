import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

# Сначала получаем элементы из инфоблока 109, чтобы узнать их ID
res_ib = requests.post(f"{WEBHOOK_URL}lists.element.get", json={
    "IBLOCK_TYPE_ID": "lists",
    "IBLOCK_ID": 109
}).json()

elements = res_ib.get("result", [])
target_ips_names = [
    "Ольга ИП", "Зобов ИП", "Шнайдер мебель ИП", 
    "Алиша ИП", "Кабиева ИП", "Альсейтов ИП", "Gidra ИП"
]

target_ids = []
id_to_name = {}

for el in elements:
    name = el.get("NAME", "").strip()
    # Проверяем, есть ли такое имя среди нужных нам
    for t_name in target_ips_names:
        if t_name.lower() in name.lower():
            target_ids.append(el["ID"])
            id_to_name[el["ID"]] = name
            break

print("Найдены ID для целевых ИП в списке:")
for tid in target_ids:
    print(f"ID: {tid} -> {id_to_name[tid]}")

# Теперь ищем сделки в воронке 79, у которых в поле UF_CRM_1742459776 стоит один из этих ID
matching_deals = []
start = 0

while True:
    payload = {
        "filter": {
            "CATEGORY_ID": 79,
            "UF_CRM_1742459776": target_ids
        },
        "select": ["ID", "TITLE", "UF_CRM_1742459776"],
        "start": start
    }
    r = requests.post(f"{WEBHOOK_URL}crm.deal.list", json=payload).json()
    batch = r.get("result", [])
    if batch:
        matching_deals.extend(batch)
    if "next" in r:
        start = r["next"]
    else:
        break

print(f"\nВсего найдено сделок с нужными ИП: {len(matching_deals)}")

# Ищем сделку, где Ольги Степочкиной (ID 477) НЕТ в наблюдателях
target_user_id = 477
example_deal = None

for deal in matching_deals:
    deal_id = deal["ID"]
    res_item = requests.post(f"{WEBHOOK_URL}crm.item.get", json={"entityTypeId": 2, "id": deal_id}).json()
    item = res_item.get("result", {}).get("item", {})
    if not item:
        continue
    
    observers = item.get("observers", [])
    if target_user_id not in observers:
        example_deal = deal
        example_deal["current_observers"] = observers
        example_deal["ip_name"] = id_to_name.get(deal.get("UF_CRM_1742459776"), str(deal.get("UF_CRM_1742459776")))
        break

if example_deal:
    print("\n=== Пример Сделки без Ольги в наблюдателях (ИП присутствует) ===")
    print(f"ID Сделки: {example_deal.get('ID')}")
    print(f"Название: {example_deal.get('TITLE')}")
    print(f"Поле ИП: {example_deal.get('ip_name')} (ID: {example_deal.get('UF_CRM_1742459776')})")
    print(f"Текущие(ID) наблюдатели: {example_deal.get('current_observers')}")
    print("==================================================================")
else:
    print("\nНе найдено подходящих сделок (у всех уже есть эта наблюдательница или нет таких сделок).")

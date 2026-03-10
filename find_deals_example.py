import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

def get_all_list_elements(iblock_id):
    elements = []
    start = 0
    while True:
        res = requests.post(f"{WEBHOOK_URL}lists.element.get", json={
            "IBLOCK_TYPE_ID": "lists",
            "IBLOCK_ID": iblock_id,
            "start": start
        }).json()
        batch = res.get("result", [])
        if not batch:
            break
        elements.extend(batch)
        if "next" in res:
            start = res["next"]
        else:
            break
    return elements

# 1. Получаем все ИП из списка 109
ips = get_all_list_elements(109)
print(f"Total IP elements found: {len(ips)}")

# 2. Ищем целевые ИП (БЕЗ Ольги)
target_names = [
    "Зобов ИП", "Шнайдер мебель ИП", "Алиша ИП", 
    "Кабиева ИП", "Альсейтов ИП", "Gidra ИП"
]

target_ids = []
id_to_name = {}

for ip in ips:
    name = ip.get("NAME", "").strip()
    for t in target_names:
        if t.lower() in name.lower():
            target_ids.append(ip["ID"])
            id_to_name[ip["ID"]] = name
            break

print("Target IDs found:")
for tid in target_ids:
    print(f"{tid}: {id_to_name[tid]}")

if not target_ids:
    print("No target IDs found. Listing first 10 elements to debug names:")
    for ip in ips[:10]:
        print(f"ID {ip['ID']}: {ip['NAME']}")
    exit()

# 3. Ищем сделки в воронке 79 с этими ИП
# Ограничимся поиском пока без фильтра по наблюдателям, чтобы увидеть что находится
matching_deals = []
start = 0
while True:
    res = requests.post(f"{WEBHOOK_URL}crm.deal.list", json={
        "filter": {
            "CATEGORY_ID": 79,
            "UF_CRM_1742459776": target_ids
        },
        "select": ["ID", "TITLE", "UF_CRM_1742459776"],
        "start": start
    }).json()
    batch = res.get("result", [])
    if not batch:
        break
    matching_deals.extend(batch)
    if "next" in res:
        start = res["next"]
    else:
        break

print(f"\nFound {len(matching_deals)} deals with these IPs.")

# 4. Проверяем наблюдателей (Ольга Степочкина ID 477)
OLGA_ID = 477
example_found = False

for deal in matching_deals:
    deal_id = deal["ID"]
    # Получаем детали через crm.item.get, так как там есть observers
    item_res = requests.post(f"{WEBHOOK_URL}crm.item.get", json={
        "entityTypeId": 2, 
        "id": deal_id
    }).json()
    item = item_res.get("result", {}).get("item", {})
    if not item:
        continue
    
    observers = item.get("observers", [])
    if OLGA_ID not in observers:
        print("\n=== НАЙДЕН ПРИМЕР СДЕЛКИ ===")
        print(f"ID: {deal_id}")
        print(f"Название: {deal['TITLE']}")
        print(f"ИП: {id_to_name.get(deal['UF_CRM_1742459776'])} (ID: {deal['UF_CRM_1742459776']})")
        print(f"Наблюдатели (ID): {observers}")
        print("============================\n")
        example_found = True
        break

if not example_found:
    print("No deals found where Olga is not an observer.")

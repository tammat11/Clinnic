import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"
OLGA_ID = 477

target_names = [
    "Зобов ИП", "Шнайдер мебель ИП", "Алиша ИП", 
    "Кабиева ИП", "Альсейтов ИП", "Gidra ИП"
]

def find_example():
    for name in target_names:
        print(f"Checking {name}...")
        res = requests.post(f"{WEBHOOK_URL}crm.deal.list", json={
            "filter": {
                "CATEGORY_ID": 79,
                "UF_CRM_1726140201224": f"%{name}%"
            },
            "select": ["ID", "TITLE", "UF_CRM_1726140201224", "UF_CRM_1742459776"]
        }).json()
        
        deals = res.get("result", [])
        for d in deals:
            item_res = requests.post(f"{WEBHOOK_URL}crm.item.get", json={
                "entityTypeId": 2, 
                "id": d["ID"]
            }).json()
            item = item_res.get("result", {}).get("item", {})
            observers = item.get("observers", [])
            
            if OLGA_ID not in observers:
                print("\n=== ПРИМЕР СДЕЛКИ ===")
                print(f"ID: {d['ID']}")
                print(f"Название: {d['TITLE']}")
                print(f"ИП (поле 1726140201224): {d.get('UF_CRM_1726140201224')}")
                print(f"ИП (поле 1742459776): {d.get('UF_CRM_1742459776')}")
                print(f"Наблюдатели: {observers}")
                print("=====================\n")
                return True
    return False

if __name__ == "__main__":
    if not find_example():
        print("Example not found.")

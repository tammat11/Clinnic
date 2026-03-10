import requests
import json

WEBHOOK_URL = "https://tootopbrass.bitrix24.kz/rest/281/b013tmm40tmou16p/"

# Let's search by string name directly since `lists.element.get` did not return the expected IBLOCK elements. 
# Another approach, we get a sample of 100 deals matching Category 79 that DO HAVE the field populated, and inspect them.
payload = {
    "filter": {
        "CATEGORY_ID": 79,
        "!=UF_CRM_1742459776": False 
    },
    "select": ["ID", "TITLE", "UF_CRM_1742459776"],
    "start": 0
}

r = requests.post(f"{WEBHOOK_URL}crm.deal.list", json=payload).json()
deals = r.get("result", [])
print(f"Found {len(deals)} deals with UF_CRM_1742459776 populated.")

if deals:
    print(deals[:5])
    # Extract IDs to find out what they match
    element_id = deals[0].get("UF_CRM_1742459776")
    if element_id:
        print(f"Looking up IBLOCK item for element ID {element_id}")
        payload_element = {
            "IBLOCK_TYPE_ID": "lists",
            "IBLOCK_ID": 109,
            "FILTER": {"ID": element_id}
        }
        res_el = requests.post(f"{WEBHOOK_URL}lists.element.get", json=payload_element).json()
        print(json.dumps(res_el, indent=2, ensure_ascii=False))


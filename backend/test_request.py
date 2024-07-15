# import requests

# url = "http://127.0.0.1:8000/ai_tip"
# headers = {
#     "Content-Type": "application/json"
# }
# data = {
#     "fuel_type": "Hybrid",
#     "transmission": "manual",
#     "ext_col": "Black",
#     "int_col": "Black",
#     "clean_title": "np",
#     "mileage": 233,
#     "accident": 0,
#     "brand": "BMW",
#     "years_used": 12
# }

# response = requests.post(url, headers=headers, json=data)

# if response.status_code == 200:
#     print("AI Tip:", response.json())
# else:
#     print("Failed to get AI tip:", response.status_code, response.text)

import requests

url = "http://127.0.0.1:8000/predict"
headers = {
    "Content-Type": "application/json"
}
data = {
    "fuel_type": "Hybrid",
    "transmission": "manual",
    "ext_col": "Black",
    "int_col": "Black",
    "clean_title": "np",
    "mileage": 2323233,
    "accident": 0,
    "brand": "BMW",
    "years_used": 12
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    print("Prediction:", response.json())
else:
    print("Failed to get prediction:", response.status_code, response.text)





import requests
import time
import sys

BACKEND_URL = "http://localhost:8000"
FRONTEND_URL = "http://localhost:5173"

def check_service(name, url):
    print(f"Checking {name} at {url}...")
    try:
        response = requests.get(url, timeout=5)
        print(f"[{response.status_code}] {name} is reachable.")
        if response.status_code == 200:
            return True
        return False
    except Exception as e:
        print(f"FAILED: {name} is unreachable. Error: {e}")
        return False

def verify_login():
    print("\nVerifying Login Endpoint...")
    try:
        payload = {"username": "admin", "password": "admin"}
        # Login is usually x-www-form-urlencoded
        response = requests.post(f"{BACKEND_URL}/api/v1/login/access-token", data=payload)
        
        if response.status_code == 200:
            token = response.json().get("access_token")
            print(f"SUCCESS: Login successful! Token: {token[:10]}...")
            return token
        else:
            print(f"FAILED: Login failed. Status: {response.status_code}, Resp: {response.text}")
            return None
    except Exception as e:
        print(f"FAILED: Login logic error: {e}")
        return None

def verify_users(token):
    print("\nVerifying Protected User List...")
    try:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(f"{BACKEND_URL}/api/v1/users/", headers=headers)
        if response.status_code == 200:
            users = response.json()
            print(f"SUCCESS: Main admin user found: {[u['username'] for u in users]}")
            return True
        else:
            print(f"FAILED: User list access denied. {response.text}")
            return False
    except Exception as e:
        print(e)
        return False

if __name__ == "__main__":
    be_ok = check_service("Backend", f"{BACKEND_URL}/health")
    fe_ok = check_service("Frontend", FRONTEND_URL)
    
    if be_ok:
        token = verify_login()
        if token:
            verify_users(token)
    
    if be_ok and fe_ok:
        print("\nOVERALL STATUS: POS System is UP and RUNNING.")
        sys.exit(0)
    else:
        print("\nOVERALL STATUS: System has issues.")
        sys.exit(1)

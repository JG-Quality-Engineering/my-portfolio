import requests

BASE_URL = "http://localhost:3000"


def test_status_check_returns_remaining():
    response = requests.get(f"{BASE_URL}/api/ask")
    assert response.status_code == 200
    assert "remaining" in response.json()


def test_ask_rejects_empty_question():
    response = requests.post(f"{BASE_URL}/api/ask", json={"question": ""})
    assert response.status_code == 400


def test_ask_returns_real_answer():
    response = requests.post(
        f"{BASE_URL}/api/ask",
        json={"question": "What QA tools has Josh used?"},
    )
    assert response.status_code == 200
    data = response.json()
    assert "answer" in data

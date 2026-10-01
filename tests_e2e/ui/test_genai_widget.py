from pages.genai_page import GenAIPage


def test_ask_widget_shows_mocked_answer(page):
    def handle_ask(route):
        if route.request.method == "GET":
            route.fulfill(json={"remaining": 5})
        else:
            route.fulfill(json={"answer": "Josh has 14 years of QA experience.", "remaining": 4})

    page.route("**/api/ask", handle_ask)

    genai = GenAIPage(page)
    genai.load()
    genai.ask("How many years of QA experience does Josh have?")

    assert genai.latest_answer().inner_text() == "Josh has 14 years of QA experience."
    assert "4 questions left" in genai.remaining_count_text()


def test_ask_widget_shows_rate_limit_message(page):
    def handle_ask(route):
        route.fulfill(json={"remaining": 0})

    page.route("**/api/ask", handle_ask)

    genai = GenAIPage(page)
    genai.load()

    assert "used all 5 questions" in genai.limit_message().inner_text()

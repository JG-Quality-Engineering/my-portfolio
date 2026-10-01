from playwright.sync_api import Page
from .base_page import BasePage


class GenAIPage(BasePage):
    def __init__(self, page: Page):
        super().__init__(page)

    def load(self):
        self.page.goto("/genai")

    def ask(self, question: str):
        self.page.get_by_placeholder("e.g., Which automation frameworks has Josh built?").fill(question)
        self.page.get_by_role("button", name="Ask").click()

    def latest_answer(self):
        return self.page.locator(".ask-widget__answer").last

    def remaining_count_text(self):
        return self.page.locator(".ask-widget__count").inner_text()

    def limit_message(self):
        return self.page.locator(".ask-widget__limit")

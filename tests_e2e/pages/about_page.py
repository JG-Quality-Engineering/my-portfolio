from playwright.sync_api import Page
from .base_page import BasePage


class AboutPage(BasePage):
    def __init__(self, page: Page):
        super().__init__(page)

    def load(self):
        self.page.goto("/")

    def card_heading(self, title: str):
        return self.page.get_by_role("heading", name=title)

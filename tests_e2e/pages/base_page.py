from playwright.sync_api import Page


class BasePage:
    def __init__(self, page: Page):
        self.page = page

    def go_to_about(self):
        self.page.get_by_role("link", name="About").click()

    def go_to_experience(self):
        self.page.get_by_role("link", name="Experience").click()

    def go_to_genai(self):
        self.page.get_by_role("link", name="GenAI").click()

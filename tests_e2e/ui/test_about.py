from pages.about_page import AboutPage


def test_about_page_shows_three_cards(page):
    about = AboutPage(page)
    about.load()

    assert about.card_heading("Background").is_visible()
    assert about.card_heading("From Tester to QA Leader").is_visible()
    assert about.card_heading("My Current Focus").is_visible()


def test_nav_to_experience(page):
    about = AboutPage(page)
    about.load()
    about.go_to_experience()

    assert page.url.endswith("/experience")

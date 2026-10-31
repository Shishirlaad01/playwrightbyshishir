from playwright.sync_api import Page, expect

# A self-contained page, so these tests check the setup without depending on the network.
HTML = """
<title>Demo Page</title>
<h1>Welcome</h1>
<input placeholder="Your name">
<button onclick="document.querySelector('#out').textContent =
    'Hello, ' + document.querySelector('input').value">Greet</button>
<p id="out"></p>
"""


def test_page_has_title(page: Page):
    page.set_content(HTML)
    expect(page).to_have_title("Demo Page")
    expect(page.get_by_role("heading", name="Welcome")).to_be_visible()


def test_fill_and_click(page: Page):
    page.set_content(HTML)
    page.get_by_placeholder("Your name").fill("Shishir")
    page.get_by_role("button", name="Greet").click()
    expect(page.locator("#out")).to_have_text("Hello, Shishir")

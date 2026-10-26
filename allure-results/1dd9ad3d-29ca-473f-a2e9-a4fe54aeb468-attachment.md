# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.js >> keyboard test
- Location: tests\keyboard.spec.js:2:1

# Error details

```
TypeError: page.keyboard.press(...).delay is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files and tools" [ref=e40] [cursor=pointer]
        - combobox "Search" [expanded] [ref=e45]:
          - text: shishimaru
          - listbox [ref=e47]:
            - option "shishimaru" [ref=e51]:
              - generic [ref=e52]: Shishimaru
            - option "shishir sharma" [ref=e57]:
              - generic [ref=e58]: Shishir Sharma
              - generic [ref=e59]: Indian film actor
            - option "shishir kothari" [ref=e63]:
              - generic [ref=e64]: Shishir Kothari
              - generic [ref=e65]: Neelam Kothari's father
            - option "shishind" [ref=e70]:
              - generic [ref=e71]: Shish Industries Ltd
            - option "shishir bajaj" [ref=e76]:
              - generic [ref=e77]: Shishir Bajaj
              - generic [ref=e78]: Kamalnayan Bajaj's son
            - option "shishir" [ref=e84]
            - option "shishir mehta" [ref=e91]:
              - generic [ref=e93]: Dr.Shishir Mehta - Best Spine Specialist Doctor in Surat | Trigeminal Neuralagia|sciatica | backpain |Knee pain | Neck Pain · Mahadev Nagar Society, Majura Gate, Surat, Gujarat
            - option "shishir kumar" [ref=e97]:
              - generic [ref=e98]: Shishir Kumar
              - generic [ref=e99]: Author
            - option "shishi" [ref=e105]
            - option "shishir saxena" [ref=e111]:
              - generic [ref=e112]: Shishir Saxena
        - link "AI Mode" [ref=e114] [cursor=pointer]
      - generic [ref=e121]:
        - generic [ref=e125]:
          - button "Google Search" [ref=e126] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e127] [cursor=pointer]
        - button "Report inappropriate predictions" [ref=e128] [cursor=pointer]
      - generic [ref=e131]:
        - button "Google Search" [ref=e132] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e133] [cursor=pointer]
  - generic [ref=e134]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - dialog "Choose Chrome, the browser built by Google":
                      - generic [ref=e144]:
                        - generic [ref=e145]:
                          - heading "Choose Chrome, the browser built by Google" [level=2] [ref=e146]
                          - generic [ref=e147]: Try a fast, secure browser with automatic updates
                          - generic [ref=e148]:
                            - generic [ref=e149]:
                              - text: By downloading Chrome, you agree to the
                              - link "Google Terms of Service" [ref=e150] [cursor=pointer]:
                                - /url: https://policies.google.com/terms
                              - text: and
                              - link "Chrome and ChromeOS Additional Terms of Service" [ref=e151] [cursor=pointer]:
                                - /url: https://www.google.com/chrome/terms/
                              - text: .
                            - generic [ref=e153]:
                              - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more about automatic reports." [checked] [ref=e154]
                              - generic [ref=e155]:
                                - text: Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
                                - link "Learn more about automatic reports" [ref=e156] [cursor=pointer]:
                                  - /url: https://support.google.com/chrome/answer/96817
                                - text: .
                        - generic [ref=e157]:
                          - button "Do not use Chrome" [ref=e158] [cursor=pointer]
                          - button "Download Chrome" [ref=e161] [cursor=pointer]
    - generic [ref=e165]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e166] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCCs
      - link "বাংলা" [ref=e167] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCCw
      - link "తెలుగు" [ref=e168] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCC0
      - link "मराठी" [ref=e169] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCC4
      - link "தமிழ்" [ref=e170] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCC8
      - link "ગુજરાતી" [ref=e171] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCDA
      - link "ಕನ್ನಡ" [ref=e172] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCDE
      - link "മലയാളം" [ref=e173] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCDI
      - link "ਪੰਜਾਬੀ" [ref=e174] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_bMDKyHKOEwwQX9fNzmZH8hGIFh4%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiHv9Tf6dOXAxWuzjgGHZ3rI34Q2ZgBCDM
  - contentinfo [ref=e176]:
    - generic [ref=e177]: India
    - generic [ref=e178]:
      - generic [ref=e179]:
        - link "Advertising" [ref=e180] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e181] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e182] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e183]:
        - link "Privacy" [ref=e184] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e185] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e189] [cursor=pointer]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | test ('keyboard test', async ({page})=>{
  3  |     await page.goto('https://www.google.com/')
  4  |     await page.getByRole('combobox', { name: 'Search' }).focus();
  5  |     await page.keyboard.type('shishir laad')
> 6  |     await page.keyboard.press('ArrowDown').delay(2000);
     |                                            ^ TypeError: page.keyboard.press(...).delay is not a function
  7  |     await page.keyboard.press('Enter').delay(2000);
  8  |     
  9  | 
  10 | })
```
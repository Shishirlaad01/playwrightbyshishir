const {test, expect} = require('@playwright/test')
test.skip ("My first test",async function({page}) {
expect(12).toBe(12)
})

test ("My second test", async function({page}) {  
expect(100).toBe(100)
})

test ("My third test", async function({page}) {
expect(true).toBeTruthy()
})

test("My fourth test", async function({page}) {
expect(false).toBeFalsy ()
})

test("My fifth test", async function({page}) {
expect("Shishir Laad".includes("Laad")).toBeTruthy()
})
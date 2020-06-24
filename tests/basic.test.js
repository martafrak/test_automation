import { Selector } from 'testcafe'

//prettier-ignore
fixture `Getting started with TestCafe documentation`
    .page `https://devexpress.github.io/testcafe/`
    .before(async t => {
        //test setup example: runDatabase, seedTestData etc.
        //we can also use beforeEach, after and afterEach ('after' for cleaning data or logging)
    })
    .beforeEach(async t => {
        //change speed for all tests in file
        await t.setTestSpeed(1)
    })
test('search testcontroller', async t => {
    //change speed for 1 test: 1 - default speed, 0.1 is helpfull for debugging
    //await t.setTestSpeed(1)
    //await t.wait(4000)
    const search_icon = Selector('#search-icon')
    const search_input = Selector('#search')
    const article_text = Selector('.post-content').innerText

    //await t.takeScreenshot({ fullPage: true })
    //await t.takeElementScreenshot(search_input)
    await t.click(search_icon)
    await t.typeText(search_input, "testcontroller")
    await t.pressKey('enter')   
    
    await t.expect(article_text).contains("A test controller object exposes the test API's methods.")
})

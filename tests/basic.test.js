import { Selector } from 'testcafe'
import xPathToCss from 'xpath-to-css'

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
        await t.setPageLoadTimeout(0)
    })
test('search testcontroller', async t => {
    //change speed for 1 test: 1 - default speed, 0.1 is helpfull for debugging
    //await t.setTestSpeed(1)
    //await t.wait(4000)
    const search_icon_xpath = `//*[@id="search-icon"]`
    const search_icon = xPathToCss(search_icon_xpath)
    const search_input = Selector('#search')
    const article_text = Selector('.post-content').innerText

    //await t.takeScreenshot({ fullPage: true })
    //await t.takeElementScreenshot(search_input)
    await t.click(search_icon)
    await t.typeText(search_input, "testcontroller")
    await t.pressKey('enter')   
    
    await t.expect(article_text).contains("A test controller object exposes the test API's methods.")
})
test('search Configuration', async t => {
    //we can also use 'only' in previous test
    const search_icon = Selector('#search-icon')
    const search_input = Selector('#search')
    const article_text = Selector('.post-content').innerText

    await t.click(search_icon)
    await t.typeText(search_input, "Configuration")
    await t.pressKey('enter')   
    
    await t.expect(article_text).contains("configuration file can include the following settings:")
})
test('check color', async t => {
    const button = Selector('.get-started-button')

    await t.hover(button) 
    
    await t.expect(Selector(button).getStyleProperty('color')).eql('rgb(64, 65, 66)');
})
test('check button visibility', async t => {
    const studio_button = Selector('#studio-link-tab')

    await t.hover(studio_button) 
    
    await t.expect(Selector(studio_button, {visibilityCheck: true}).exists).ok();
})

import { Selector } from 'testcafe'

// prettier-ignore
fixture `Search product test`
    .page `http://automationpractice.com/`

test.skip("Search invalid product", async t => {
    const searchInput = Selector('#search_query_top')
    const alertWarning = Selector('#center_column').innerText

    await t.typeText(searchInput, 'red dress', {paste: true})
    await t.pressKey('enter')

    await t.expect(alertWarning).contains('No results were found for your search')
})

test.skip("Search product", async t => {
    const searchInput = Selector('#search_query_top')
    const productBox = Selector('.product-container')

    await t.typeText(searchInput, 'Blouse', {paste: true})
    await t.pressKey('enter')

    await t.expect(productBox.exists).ok()
})

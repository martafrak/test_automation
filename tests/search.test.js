import { Selector } from 'testcafe'
import Nav from '../POM/components/Nav'
import Product from '../POM/components/Product'

const nav = new Nav()
const product = new Product()

// prettier-ignore
fixture `Search product test`
    .page `http://automationpractice.com/`

test("Search invalid product", async t => {
    await t.typeText(nav.searchInput, 'red dress', {paste: true})
    await t.pressKey('enter')

    await t
        .expect((product.alertWarning).innerText)
        .contains('No results were found for your search')
})

test("Search product", async t => {
    await t.typeText(nav.searchInput, 'Blouse', {paste: true})
    await t.pressKey('enter')

    await t.expect(product.productBox.exists).ok()
})

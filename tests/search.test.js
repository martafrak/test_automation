import { Selector } from 'testcafe'
import Nav from '../POM/components/Nav'
import Product from '../POM/pages/Product'

const nav = new Nav()
const product = new Product()

// prettier-ignore
fixture `Search product test`
    .page `http://automationpractice.com/`

test("Search invalid product", async t => {
    nav.search('red dress')

    await t
        .expect(product.alertWarning.innerText)
        .contains('No results were found for your search')
})

test("Search product", async t => {
    nav.search('Blouse')

    await t.expect(product.productBox.exists).ok()
})

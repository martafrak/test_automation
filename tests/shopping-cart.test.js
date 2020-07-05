import { Selector } from 'testcafe'
import { login } from '../helper'
import Nav from '../POM/components/Nav'
import Product from '../POM/pages/Product'

const nav = new Nav()
const product = new Product()

// prettier-ignore
fixture `Add product to cart`
    .page `http://automationpractice.com/`

test.before(async t => {
    await login('testtime@test.com', 'Test123')
})("Add product to cart", async t => {
    nav.search('Blouse')
    await t.click(product.addToCartButton)

    await t
        .expect((product.info).innerText)
        .contains('Product successfully added to your shopping cart')
})

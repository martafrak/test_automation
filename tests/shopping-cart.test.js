import { Selector } from 'testcafe'
import { login } from '../helper'

// prettier-ignore
fixture `Add product to cart`
    .page `http://automationpractice.com/`

test.before(async t => {
    await login('testtime@test.com', 'Test123')
})("Add product to cart", async t => {
    const searchInput = Selector('#search_query_top')
    const linkToAddToCart = Selector("a").withText('Add to cart')
    const info = Selector('#layer_cart').innerText

    await t.typeText(searchInput, 'Blouse', {paste: true})
    await t.pressKey('enter')
    await t.click(linkToAddToCart)

    await t
        .expect(info)
        .contains('Product successfully added to your shopping cart')
})

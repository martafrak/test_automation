import { Selector } from 'testcafe'

// prettier-ignore
fixture `Add product to cart`
    .page `http://automationpractice.com/`

test.before(async t => {
    const signInButton =  Selector('.login')
    const emailInput = Selector('#email')
    const passwordInput = Selector('#passwd')
    const submitButton = Selector('#SubmitLogin')

    await t.click(signInButton)
    await t.typeText(emailInput, 'testtime@test.com', {paste: true})
    await t. typeText(passwordInput, 'Test123', {paste: true})
    await t.click(submitButton)
})("Add product to cart", async t => {
    const searchInput = Selector('#search_query_top')
    const linkToAddToCart = Selector("a").withText('Add to cart')
    const Info = Selector('#layer_cart').innerText

    await t.typeText(searchInput, 'Blouse', {paste: true})
    await t.pressKey('enter')
    await t.click(linkToAddToCart)

    await t
        .expect(Info)
        .contains('Product successfully added to your shopping cart')
})

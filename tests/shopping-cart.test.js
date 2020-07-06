import { Selector } from 'testcafe'
import LoginPage from '../POM/pages/LoginPage'
import Nav from '../POM/components/Nav'
import Product from '../POM/pages/Product'

const loginPage = new LoginPage()
const nav = new Nav()
const product = new Product()

// prettier-ignore
fixture `Add product to cart`
    .page `http://automationpractice.com/`

test("Add product to cart", async t => {
    await t.click(nav.signInButton)
    loginPage.loginToApp('testtime@test.com', 'Test123')
    nav.search('Blouse')
    await t.click(product.addToCartButton)

    await t
        .expect(product.info.innerText)
        .contains('Product successfully added to your shopping cart')
})

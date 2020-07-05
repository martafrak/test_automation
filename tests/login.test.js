import { Selector } from 'testcafe'
//import { login } from '../helper'
import LoginPage from '../POM/pages/LoginPage'
import Form from '../POM/pages/Form'
import Nav from '../POM/components/Nav'

const loginPage = new LoginPage()
const form = new Form()
const nav = new Nav()

// prettier-ignore
fixture `Login Test`
    .page `http://automationpractice.com/`

test("Login with invalid credentials", async t => {
    //await login('marta@test.com', 'Test123')
    await t.click(nav.signInButton)
    loginPage.loginToApp('marta@test.com', 'Test123')

    await t
        .expect((form.alertMessage).innerText)
        .contains('Authentication failed.')
})

test("Login with valid credentials", async t => {
    //await login('testtime@test.com', 'Test123')
    await t.click(nav.signInButton)
    loginPage.loginToApp('testtime@test.com', 'Test123')

    await t
        .expect((form.infoAccount).innerText)
        .contains('Welcome to your account.')
})

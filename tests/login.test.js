import { Selector } from 'testcafe'
import { login } from '../helper'
import Form from '../POM/pages/Form'

const form = new Form()

// prettier-ignore
fixture `Login Test`
    .page `http://automationpractice.com/`

test("Login with invalid credentials", async t => {
    await login('marta@test.com', 'Test123')

    await t
        .expect((form.alertMessage).innerText)
        .contains('Authentication failed.')
})

test("Login with valid credentials", async t => {
    await login('testtime@test.com', 'Test123')

    await t
        .expect((form.infoAccount).innerText)
        .contains('Welcome to your account.')
})

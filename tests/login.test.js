import { Selector } from 'testcafe'
import { login } from '../helper'

// prettier-ignore
fixture `Login Test`
    .page `http://automationpractice.com/`

test("Login with invalid credentials", async t => {
    const alertMessage = Selector('div.alert.alert-danger').innerText

    await login('marta@test.com', 'Test123')

    await t.expect(alertMessage).contains('Authentication failed.')
})

test("Login with valid credentials", async t => {
    const infoAccount = Selector('.info-account').innerText

    await login('testtime@test.com', 'Test123')

    await t.expect(infoAccount).contains('Welcome to your account.')
})

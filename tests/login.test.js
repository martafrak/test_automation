import { Selector } from 'testcafe'

// prettier-ignore
fixture `Login Test`
    .page `http://automationpractice.com/`

test.skip("Login with invalid credentials", async t => {
    const signInButton =  Selector('.login')
    const emailInput = Selector('#email')
    const passwordInput = Selector('#passwd')
    const submitButton = Selector('#SubmitLogin')
    const alertMessage = Selector('div.alert.alert-danger').innerText

    await t.click(signInButton)
    await t.typeText(emailInput, 'marta@test.com', {paste: true})
    await t.typeText(passwordInput, 'test123')
    await t.click(submitButton)

    await t.expect(alertMessage).contains('Authentication failed.')
})

test.skip("Login with valid credentials", async t => {
    const signInButton =  Selector('.login')
    const emailInput = Selector('#email')
    const passwordInput = Selector('#passwd')
    const submitButton = Selector('#SubmitLogin')
    const infoAccount = Selector('.info-account').innerText
    
    await t.click(signInButton)
    await t.typeText(emailInput, 'testtime@test.com', {paste: true})
    await t. typeText(passwordInput, 'Test123', {paste: true})
    await t.click(submitButton)

    await t.expect(infoAccount).contains('Welcome to your account.')
})

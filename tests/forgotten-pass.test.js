import { Selector } from 'testcafe'
import Nav from '../POM/components/Nav'

const nav = new Nav()

// prettier-ignore
fixture `Send new password test`
    .page `http://automationpractice.com/`

test("Not send new password for invalid email test", async t => {
    const linkToForgottenPass = Selector("a").withText('Forgot your password?')
    const emailInput = Selector('#email')
    const alertMessage = Selector('div.alert.alert-danger').innerText

    await t.click(nav.signInButton)
    await t.click(linkToForgottenPass)
    await t.typeText(emailInput, 'invalidemail@test.pl', {paste: true})
    await t.pressKey('enter')

    await t.expect(alertMessage).contains('There is no account registered for this email address.')
})

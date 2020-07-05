import { Selector } from 'testcafe'
import Nav from '../POM/components/Nav'
import Form from '../POM/pages/Form'

const nav = new Nav()
const form = new Form()

// prettier-ignore
fixture `Send new password test`
    .page `http://automationpractice.com/`

test("Not send new password for invalid email test", async t => {
    await t.click(nav.signInButton)
    await t.click(form.linkToForgottenPass)
    await t.typeText(form.emailInput, 'invalidemail@test.pl', {paste: true})
    await t.pressKey('enter')

    await t
        .expect((form.alertMessage).innerText)
        .contains('There is no account registered for this email address.')
})

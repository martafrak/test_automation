import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.emailInput = Selector('#email')
        this.passInput = Selector('#passwd')
        this.submitButton = Selector('#SubmitLogin')
    }

    async loginToApp(username, password) {
        await t
            .typeText(this.emailInput, username, {paste: true, replace: true})
            .typeText(this.passInput, password, {paste: true, replace: true})
            .click(this.submitButton)
    }
}

export default LoginPage

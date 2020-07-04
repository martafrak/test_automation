import { Selector, t } from 'testcafe'

class Form {
    constructor() {
        this.alertMessage = Selector('div.alert.alert-danger')
        this.emailInput = Selector('#email')
        this.infoAccount = Selector('.info-account')
        this.linkToForgottenPass = Selector("a").withText('Forgot your password?')
    }
}

export default Form

import { Selector, t } from 'testcafe'

class Nav {
    constructor() {
        this.signInButton = Selector('.login')
    }
}

export default Nav

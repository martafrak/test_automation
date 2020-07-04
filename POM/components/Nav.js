import { Selector, t } from 'testcafe'

class Nav {
    constructor() {
        this.signInButton = Selector('.login')
        this.searchInput = Selector('#search_query_top')
    }

    async search(text) {
        await t
            .typeText(this.searchInput, text, {paste: true, replace: true})
            .pressKey('enter')
    }
}

export default Nav

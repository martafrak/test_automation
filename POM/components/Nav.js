import { Selector, t } from 'testcafe'

class Nav {
    constructor() {
        this.signInButton = Selector('.login')
        this.searchInput = Selector('#search_query_top')
    }
}

export default Nav

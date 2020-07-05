import { Selector, t } from 'testcafe'

class Product {
    constructor() {
        this.addToCartButton = Selector("a.button.ajax_add_to_cart_button.btn.btn-default")
        this.alertWarning = Selector('#center_column')
        this.info = Selector('#layer_cart')
        this.productBox = Selector('.product-container')
    }
}

export default Product

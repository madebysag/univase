// const horizontalSections = document.querySelectorAll("section.featured")[0];

import UI from "./js/UI.js"
import Store from "./js/Store.js"
import Cart from "./js/Cart.js"

const addToCartBtns = document.querySelectorAll(".add-to-cart")
const cartBtn = document.querySelector(".cart-btn")
const modalCloseBtn = document.querySelector(".close-modal")
const modalContainer = document.querySelector(".modal-container")

addToCartBtns.forEach( btn => {
	btn.addEventListener("click", (e)=> {
		UI.showCartIcon()

		const product = JSON.parse(e.target.parentElement.dataset.product)

		Cart.add(product)
		UI.buildCart()
		UI.updateCartBagde()
	})
})

cartBtn.addEventListener("click", ()=> {
	UI.showCart()
})

modalContainer.addEventListener("click", (e)=> {
	if (e.target == modalContainer || e.target == modalCloseBtn) {
		UI.hideCart()
	}
})
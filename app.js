// const horizontalSections = document.querySelectorAll("section.featured")[0];

import UI from "./js/UI.js"
import Store from "./js/Store.js"

// UI.showCartIcon()
// UI.buildCart()
// // UI.showCart()

const addToCartBtns = document.querySelectorAll(".add-to-cart")
const cartBtn = document.querySelector(".cart-btn")
const modalCloseBtn = document.querySelector(".close-modal")
const modalContainer = document.querySelector(".modal-container")

addToCartBtns.forEach( btn => {
	btn.addEventListener("click", ()=> {
		UI.showCartIcon()
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
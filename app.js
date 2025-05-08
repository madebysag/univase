// const horizontalSections = document.querySelectorAll("section.featured")[0];

import UI from "./js/UI.js"
import Store from "./js/Store.js"
import Cart from "./js/Cart.js"

const addToCartBtns = document.querySelectorAll(".add-to-cart")
const cartBtn = document.querySelector(".cart-btn")
const modalCloseBtn = document.querySelector(".close-modal")
const modalContainer = document.querySelector(".modal-container")

const cartItems = document.querySelectorAll(".cart-items .item")

// Initialize Homepage
// const UI = new UIHandler()

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

/**
 * Event Delegation should save the day!!
 * I tried event capture, not working
 */
modalContainer.addEventListener("click", (e)=> {
	// Hide the Modal
	if (e.target == modalContainer || e.target == modalCloseBtn) {
		UI.hideCart()
	}

	// Increase count logic
	if (e.target.classList.contains("plus")) {

		// I do not have an ID, names should work I guess
		const itemName = e.target.parentElement.parentElement.querySelector("small.item-name").innerText;

		let itemInCart;

		for (let product of Cart.products) {
			if (product.name === itemName) {

				product.count.increase()

				itemInCart = product;
			}
		}

		UI.updateCartItemCount(itemInCart, e.target.nextElementSibling)
	}

	// Decrease count logic
	if (e.target.classList.contains("minus")) {

		// I do not have an ID, names should work I guess
		const itemName = e.target.parentElement.parentElement.querySelector("small.item-name").innerText;

		let itemInCart;

		for (let product of Cart.products) {
			if (product.name === itemName) {
				
				product.count.decrease()

				itemInCart = product;
			}
		}

		UI.updateCartItemCount(itemInCart, e.target.previousElementSibling)
	}
	
})

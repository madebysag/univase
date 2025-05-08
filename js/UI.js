import utils from "./utils.js"
import Store from "./Store.js"
import Cart from "./Cart.js"
import HorizontalSmoothScroll from "./HorizontalSmoothScroll.js"

class UI {
	constructor() {
		this.DOMElements = {
			horizontalSectionContainer: document.querySelector(".carousel-container"),
			modalContainer: document.querySelector(".modal-container"),
			cartBtn: document.querySelector(".cart-btn"),
			catalogueContainer: document.querySelector(".catalogue-container")
		}
		
		if (this.DOMElements.horizontalSectionContainer) this.initHomePage()
		else this.buildFeaturedSection(this.DOMElements.catalogueContainer.children[0])

		 // this.initHomePage()
	}

	initHomePage() {
		this.horizontalSmoothScroll = new HorizontalSmoothScroll(this.DOMElements.horizontalSectionContainer)

		this.buildFeaturedSection(this.DOMElements.horizontalSectionContainer.children[0], true)


		window.addEventListener("resize", () => {

			this.horizontalSmoothScroll.calculateContainerHeight()
		})
	}

	initCataloguePage() {
		this.buildFeaturedSection(this.DOMElements.catalogueContainer.children[0])
	}
	buildFeaturedSection(container, horizontalSection = false) {
		// const container = this.DOMElements.horizontalSectionContainer.children[0]
		
		for (let product of Store) {

			container.innerHTML += `
				<div class="product" data-product='${JSON.stringify(product)}'>
                    <div class="img-container">
                        <img src=${product.pic} alt="">
                        <button class="view-btn">
                            <span>View 3D</span>
                            <img src="../static/images/arrow.svg" alt="">
                        </button>
                    </div>
                    <h3>${product.name}</h3>
                    <h1>${product.price}</h1>
                    <button class="btn-main add-to-cart" type="button">Add to Cart</button>
                </div>
			`
		}

		container.innerHTML += `
			<div class="product">
                <button class="load-more">Load More</button>
            </div>
		`

		if (horizontalSection) this.horizontalSmoothScroll.calculateContainerHeight()
	}

	// Build the contents of Cart
	buildCart(){

        let totalPrice = 0;

        // Clear the contents first
		this.DOMElements.modalContainer.querySelector(".cart-items").innerHTML = "";

		for (let product of Cart.products) {

			this.DOMElements.modalContainer.querySelector(".cart-items").innerHTML += `
				<div class="item">

                    <div>
                        <img src="${product.pic}" alt="" class="item-pic">
                        <small class="item-name">${product.name}</small>
                    </div>

                    <div class="counter">
                        <button class="plus">+</button>
                        <span>${product.count.value}</span>
                        <button class="minus">-</button>
                    </div>

                    <div class="item-price">${product.price}</div>

                </div>
			`
		}

		totalPrice = Cart.calculateTotal()

		this.DOMElements.modalContainer.querySelector(".cart-total-price h3").innerHTML = "$" + totalPrice
	}

	updateCartItemCount(itemInCart, UIElement){
		UIElement.innerHTML = itemInCart.count.value
		this.DOMElements.modalContainer.querySelector(".cart-total-price h3").innerHTML = "$" + Cart.calculateTotal()
	}

	showCart(){
		this._showElement(this.DOMElements.modalContainer)
	}

	hideCart(){
		this._hideElement(this.DOMElements.modalContainer)
	}

	showCartIcon() {
		this.DOMElements.cartBtn.removeAttribute("hidden")
		this.DOMElements.cartBtn.animate([
			{opacity: 0, bottom: "0vh"},
			{opacity: 1, bottom: "16vh"}
		], {
			duration: 200,
			ease: "ease-in",
		})
	}

	updateCartBagde() {
		this.DOMElements.cartBtn.querySelector(".badge").innerHTML = Cart.products.length;
	}

	hideCartIcon() {
		// this.DOMElements.cartBtn.setAttribute("hidden", true)
		this.DOMElements.cartBtn.animate([
			{opacity: 1, bottom: "16vh"},
			{opacity: 0, bottom: "0vh"}
		], {
			duration: 200,
			ease: "ease-in",
		})
	}


	// Private Functions?? loll
	_showElement(element) {
		element.removeAttribute("hidden")
		element.animate([
			{opacity: 0},
			{opacity: 1}
		], {
			duration: 200,
			ease: "ease-in",
		})
	}

	_hideElement(element) {
		element.setAttribute("hidden", true)
	}
}

export default new UI();


// TODOS 
// * Show Icon only when item add to cart
// * 
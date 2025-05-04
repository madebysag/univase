import utils from "./utils.js"
import Store from "./Store.js"
import Cart from "./Cart.js"
import HorizontalSmoothScroll from "./HorizontalSmoothScroll.js"

class UI {
	constructor () {
		this.DOMElements = {
			horizontalSectionContainer: document.querySelector(".carousel-container"),
			modalContainer: document.querySelector(".modal-container"),
			cartBtn: document.querySelector(".cart-btn"),
		}

		this.horizontalSmoothScroll = new HorizontalSmoothScroll(this.DOMElements.horizontalSectionContainer)

		this.buildFeaturedSection()


		window.addEventListener("resize", () => {

			this.horizontalSmoothScroll.calculateContainerHeight()
		})

	}

	buildFeaturedSection() {
		const container = this.DOMElements.horizontalSectionContainer.children[0]
		
		for (let product of Store) {
			container.innerHTML += `
				<div class="product">
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

		this.horizontalSmoothScroll.calculateContainerHeight()
	}

	// Build the contents of Cart
	buildCart(){

        let totalPrice = 0;

        // Clear the contents first
		this.DOMElements.modalContainer.querySelector(".cart-items").innerHTML = "";

		for (let product in Cart.products) {
			this.DOMElements.modalContainer.querySelector(".cart-items").innerHTML += `
				<div class="item">

                    <div>
                        <img src="${product.pic}" alt="" class="item-pic">
                        <small>${product.name}</small>
                    </div>

                    <div class="counter">
                        <button>+</button>
                        <span>3</span>
                        <button>-</button>
                    </div>

                    <div class="item-price">${product.price}</div>

                </div>
			`

			totalPrice += product.price;
		}

		this.DOMElements.modalContainer.querySelector(".cart-total-price h3").innerHTML = totalPrice
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
			duration: 100,
			ease: "ease-in",
		})
	}

	hideCartIcon() {
		// this.DOMElements.cartBtn.setAttribute("hidden", true)
		this.DOMElements.cartBtn.animate([
			{opacity: 1, bottom: "16vh"},
			{opacity: 0, bottom: "0vh"}
		], {
			duration: 100,
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
			duration: 100,
			ease: "ease-in",
		})
	}

	_hideElement(element) {
		element.setAttribute("hidden", true)
	}
}

export default new UI()


// TODOS 
// * Show Icon only when item add to cart
// * 
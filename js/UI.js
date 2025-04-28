import utils from "./utils.js"
import Store from "./Store.js"
import HorizontalSmoothScroll from "./HorizontalSmoothScroll.js"

class UI {
	constructor () {
		this.DOMElements = {
			horizontalSectionContainer: document.querySelector(".carousel-container"),
		}

		this.horizontalSmoothScroll = new HorizontalSmoothScroll(this.DOMElements.horizontalSectionContainer)

		this.buildFeaturedSection(this.DOMElements.horizontalSectionContainer.children[0])


		window.addEventListener("resize", () => {

			this.horizontalSmoothScroll.calculateContainerHeight()
		})

	}

	buildFeaturedSection(container) {
		
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
                    <button class="btn-main" type="button">Add to Cart</button>
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
}

export default new UI()
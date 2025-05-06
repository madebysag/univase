import Store from "./Store.js"
class Cart {
	constructor () {
		this.products = [] // what am I cooking......;
	}

	add(product) {

		let isPresent = false;

		for (let item of this.products) {
			if (product.name == item.name) {
				isPresent = true;
			}
		}

		if (!isPresent) this.products.push(product)
		
	}
	remove(product) {
		this.products = this.products.filter(item => item.name !== product.name)
	}
	clear() {
		this.products = []
	}
}

export default new Cart()

// Inside Cart, a product = {
// 	name,
// 	pic,
// 	count,
// 	price
// }
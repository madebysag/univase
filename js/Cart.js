class Cart {
	constructor () {
		this.products = []; // what am I cooking......;
	}

	add(product) {

		let isPresent = false;

		for (let item of this.products) {
			if (product.name == item.name) {
				isPresent = true;
			}
		}

		if (!isPresent) {

			// Default count to one
			product.count = new Counter;

			// Add it to Cart
			this.products.push(product)
		}
		
	}
	remove(product) {
		this.products = this.products.filter(item => item.name !== product.name)
	}
	clear() {
		this.products = []
	}
	calculateTotal() {

		let total = 0;
		for (let product of this.products) {
			total += product.price * product.count.value;
		}

		return total;
	}

}


class Counter {
	constructor() {
		this.value = 1;
	}

	increase() {
		this.value++
	}

	decrease(){
		this.value > 1 ? this.value-- : this.value;
	}
}
export default new Cart()

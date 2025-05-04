import Store from "./Store.js"
class Cart {
	constructor () {
		this.products = [...Store] // what am I cooking......;
	}
}

export default new Cart()

// Inside Cart, a product = {
// 	name,
// 	pic,
// 	count,
// 	price
// }
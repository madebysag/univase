async function loadProducts() {

	try{
		const response = await fetch("./db/products.json");

		if (!response.ok) {
			throw new Error("Could not fetch data. Response Status: \n" + response.status);
		} 
		
		const json = response.json();
			
		return json;

	} catch(e) {

			console.error(e.message)
		}

}

// Store here is a promise, to be used with then() method
const Store = (async function() {
	const p = await loadProducts()
	return p;
})()

export default Store;

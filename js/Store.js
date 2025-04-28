async function loadProducts() {

	try{
		const response = await fetch("../db/products.json")

		if (!response.ok) {
			throw new Error("Could not fetch data. Response Status: \n" + response.status)
		} 
		
		const json = response.json();
			
		return json;

	} catch(e) {

			console.error(e.message)
		}

}

const Store = await loadProducts() 

export default Store;
let output = document.getElementById('output');

let productsArr = [];
let categoriesArr = [];
let cardDataArr = [];

function productsRequestLoadHandler() {
	productsArr = JSON.parse(event.target.responseText).products;
	console.log("products array", productsArr);
	requestCategories();
}

function categoriesRequestLoadHander() {
	categoriesArr = JSON.parse(event.target.responseText).categories;
	console.log("categories array", categoriesArr);
	buildCardDataArray();
}

function requestProducts() {
	let productsRequest = new XMLHttpRequest();
	productsRequest.addEventListener('load', productsRequestLoadHandler);
	productsRequest.open('GET', 'products.json');
	productsRequest.send();
}

function requestCategories() {
	let categoriesRequest = new XMLHttpRequest();
	categoriesRequest.addEventListener('load', categoriesRequestLoadHander);
	categoriesRequest.open('GET', 'categories.json');
	categoriesRequest.send();
}

function buildCardDataArray() {
	productsArr.forEach(function(product){
		categoriesArr.forEach(function(category){
			if (product.category_id === category.id) {
				cardDataArr.push({
					id: product.id,
					name: product.name,
					price: product.price,
					category: category.name
				});
			}
		});
	});
	console.log("card data array", cardDataArr)
	buildCardDom();
}

function buildCardDom() {
	cardDataArr.forEach(function(cardData){
		output.innerHTML +=
		`
		<div class="card">
			<h2>${cardData.name}</h2>
			<h3>Department: ${cardData.category}</h3>
			<p>Price: $${cardData.price}</p>
		</div>
		`;
	});
}


// request products
requestProducts();

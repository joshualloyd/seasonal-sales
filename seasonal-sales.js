let output = document.getElementById('output');

let productsRequest = new XMLHttpRequest();
let categoriesRequest = new XMLHttpRequest();

function requestLoadHandler() {
	let data = JSON.parse(event.target.responseText);
}

productsRequest.addEventListener('load', requestLoadHandler);
categoriesRequest.addEventListener('load', requestLoadHandler);

productsRequest.open('GET', 'products.json');
categoriesRequest.open('GET', 'categories.json');
productsRequest.send();
categoriesRequest.send();
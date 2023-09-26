export let productss = 
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => productss = json)

// fetch gets data from the server

fetch("http://localhost:3000/products")
.then(res => res.json())
.then(data => console.log(data))
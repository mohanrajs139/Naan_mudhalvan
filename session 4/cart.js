const mobile=JSON.parse( localStorage.getItem('cartdata'));
console.log(mobile);

const variable = document.querySelector('.products-container');

for( let i = 0; i<mobile.length ; i++){
    variable.innerHTML += `
    <div class ="container">
        <div class = "image">
            <img src=${mobile[i].image}>
        </div>
        <div class = "info">
            <h1>${mobile[i].brand}</h1>
            <p>${mobile[i].description}</p>
            <p class = "price">${mobile[i].price}</p>
            <button onclick = ${mobile[i].productId}>Add Cart</button>
        </div>
    </div>
    `
}
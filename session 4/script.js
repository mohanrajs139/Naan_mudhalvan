let mobile = [ {
    productId : 1,
    brand : "Vivo",
    model : "V50",
    image : "https://m.media-amazon.com/images/I/71Al7iepTgL._AC_UY327_FMwebp_QL65_.jpg",
    description : "Vivo X80 pro 12GB RAM 256GB Cosmic Black",
    price : 42000
},

    {
    productId : 2,
    brand : "iQoo",
    model : "13 5g",
    image : "https://m.media-amazon.com/images/I/51jAxBrJCtL._AC_UY327_FMwebp_QL65_.jpg",
    description : "iQOO 13 5G (Legend, 16GB RAM, 512GB Storage)",
    price : 42000
},

    {
    productId : 3,
    brand : "Honor",
    model : "200 5g",
    image : "https://m.media-amazon.com/images/I/71yVqjq0aeL._AC_UY327_FMwebp_QL65_.jpg",
    description : "HONOR 200 5G (Black, 8GB + 256GB) | 6.7-inch AMOLED Quad-Curved Display | Dual OIS 50MP + 50MP + 12MP Camera | 50MP Selfie Camera | AI-Powered MagicOS 8.0 | Without Charger",
    price : 42000
},
]

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
            <button onclick = "cart(${mobile[i].productId})">Add Cart</button>
        </div>
    </div>
    `
}

let arr=[];
function cart(proId)
{
    if(localStorage.length==0)
    {
        arr=[]
    }
    arr.push(mobile[proId-1])
    localStorage.setItem("cartdata",JSON.stringify(arr));
}

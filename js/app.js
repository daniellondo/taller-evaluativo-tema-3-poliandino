import  {productsDetails} from  './products.js'

// ACTIVIDADES A DESAROLLAR:

// 1. Cree un nuevo array basado en products que solo tenga los nombres de los productos
let productNames = productsDetails.map((product) => {return product.title});
console.log(productNames);

// 2. Cree una funcion para filtar los productos con descuentos mayores al 12%
let discountedProducts = productsDetails.filter((product) => 
{return product.discountPercentage > 12});
console.log(discountedProducts);

// 3. Cree una funcion que retorne la cantidad de stock existente en los productos de la categoria smartphones

const stockSmartphones =  productsDetails
                        .filter(x => x.category === "smartphones")
                        .map(product => product.stock)
                        .reduce((actual,next) => { return actual+next});
console.log(stockSmartphones);

// 4. En un nuevo array cambie el nombre de la categoria fragrances por parfums

const newArray = productsDetails.map((product)=> 
{  
    if (product.category === 'fragrances')
    {
        return {
            ...product,category: "parfums"
        }
    }
    return {...product}
})
console.log(newArray);

// 5. Cree un nuevo array con los productos ordenados por precio.
const sortArrayByPrice = productsDetails.sort((a, b) => a.price - b.price);
console.log(sortArrayByPrice);

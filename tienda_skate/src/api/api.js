//deberia venir del backend
const products = [ 
    {
        id: 1,
        title:'Tabla SANTA CRUZ MANDALA',
        price: 15999,
        pictureUrl:'https://drifters.com.ar/uploads/product_image/24025/DriftersPDP_HRD_SC00000641_Shot1.jpg',
    },
    {
        id: 2,
        title:'Tabla CLIVER TIME FOR PINK',
        price: 7600,
        pictureUrl:'https://drifters.com.ar/uploads/product_image/21928/DriftersPDP_HRD_CLE0001675_Shot1.jpg'
    },
    {
        id: 3,
        title:'Tabla WOODOO BH STRAWBERRY',
        price:7700,
        pictureUrl:'https://drifters.com.ar/uploads/product_image/24827/DriftersPDP_HRD_SK16001694-0000_Shot1_v2.jpg'
    },
]
const promesa = new Promise(function(resolve, rejected){
    setTimeout(function(){
        //retornar productos
        resolve(products);
    }, 2000);
})
export default function GetItems(){
    return promesa;
}

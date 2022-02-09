//deberia venir del backend
const products = [ 
    {
        id: 1,
        title:'Tabla santa cruz',
        price: 15999.00,
        pictureUrl:'https://drifters.com.ar/uploads/product_image/24025/DriftersPDP_HRD_SC00000641_Shot1.jpg',
    },
    {
        id: 2,
        title:'Truck Classic 44 Matte Black - Set x 2u.',
        price: 14900.00,
        pictureUrl:'https://drifters.com.ar/uploads/product_image/24251/DriftersPDP_HRD_ACEATC44MB-001_Shot2.jpg'
    },
    {
        id: 3,
        title:'Rulemanes Woodoo tatu pro II Avec 7',
        price:8999,
        pictureUrl:'https://drifters.com.ar/uploads/product_image/21980/DriftersPDP_HRD_WOO0001566-100_Shot1.jpg'
    }
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

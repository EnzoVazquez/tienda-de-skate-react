//deberia venir del backend
const products = [ 
    {
        id: 1,
        title:'Tabla santa cruz',
        price: 21999,
        pictureUrl:'https://www.cristobalcolon.com/producto_detalle/tablasanta_cruz_emmanuel_guzman/',
    },
    {
        id: 2,
        title:'Truck Independent X2 Toy Machine',
        price: 21999,
        pictureUrl:'https://www.cristobalcolon.com/producto_detalle/truckindependent_x2_toy_machine/',
    },
    {
        id: 3,
        title:'Rulemanes Bronson Milton Martinez G3 ABEC7',
        price:'8999',
        pictureUrl:'https://www.cristobalcolon.com/producto_detalle//rulemanesbronson_milton_martinez_g3_abec7/14448.html'
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

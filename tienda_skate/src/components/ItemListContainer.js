import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import GetItems from "../api/api";
import ItemList from "./itemList";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
// cuando se monta se buscan los productos
useEffect(() =>{
    GetItems().then(function(products){
        console.log(products);
        setProducts(products)
    })
}, []);
//array de dependencias, vacio se ejecuta cuando se monta
function AgregarItem(ItemCount){
    console.log(ItemCount)
}

 function ItemList(){
    return(
        <div>
            {products.length > 0 ? <ItemList products={products}/> : <p>Cargando...</p>}
            <ItemCount stock={5} initial={1} onAdd={AgregarItem}/>
        </div>
    )
}
}
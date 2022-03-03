import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import GetItems from "../api/api";
import ItemList from "./itemList";
import { getDocs, collection } from "firebase/firestore";
import { baseDatos } from "../firebase";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
// cuando se monta se buscan los productos
useEffect(() =>{
    GetItems().then(function(products){
        console.log(products);
        setProducts(products);
    })
}, []);
//array de dependencias, vacio se ejecuta cuando se monta

function AgregarItem(ItemCount){
    console.log(ItemCount)
}

    return(
        <div>
            {products.length > 0 ? <ItemList products={products}/> : <p>Cargando...</p>}
            
        </div>
    )
}

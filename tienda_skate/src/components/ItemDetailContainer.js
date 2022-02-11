import { useEffect, useState } from "react";
import GetItems from "../api/api";
import Item from "./Item";
// 1ero busca con getItem la lista de productos
// 2do filtra un producto(cualquiera)
// 3ero guardar en un estado ese producto
//pasarle el producto a ItemDetail
export default function ItemDetailContainer(products){
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const item = GetItems.filter(function(products){
      return(products.id === 1)
    })
    console.log(item)
  })
}
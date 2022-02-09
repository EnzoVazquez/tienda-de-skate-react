import { useEffect } from "react";
import GetItems from "../api/api";
// 1ero busca con getItem la lista de productos
// 2do filtra un producto(cualquiera)
// 3ero guardar en un estado ese producto
//pasarle el producto a ItemDetail
export default function ItemDetailContainer(){
    useEffect(()=>{
        GetItems.then(()=>{
          const item = product.find((i)=> i.id === 1);
          //item guardado en un estado
        })
    }, [])
}
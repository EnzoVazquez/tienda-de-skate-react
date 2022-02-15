import { useEffect, useState } from "react";
import GetItems from "../api/api";
import ItemDetail from './ItemDetail'
// 1ero busca con getItem la lista de productos
// 2do filtra un producto(cualquiera)
// 3ero guardar en un estado ese producto
//pasarle el producto a ItemDetail
export default function ItemDetailContainer(){
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    GetItems().then((product)=>{
      const product = products.find((i)=> i.id === 1);
      setProduct(product);
    })
  })
  return(
    <div>
      <ItemDetail/>
    </div>
  )
}

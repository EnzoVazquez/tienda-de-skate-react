import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetItems from "../api/api";
import ItemDetail from './ItemDetail'
// 1ero busca con getItem la lista de productos
// 2do filtra un producto(cualquiera)
// 3ero guardar en un estado ese producto
//pasarle el producto a ItemDetail
export default function ItemDetailContainer(){
  const [product, setProduct] = useState([]);
  const {productId} = useParams()
  useEffect(()=>{
    GetItems().then((items)=>{
      const item = items.find((i)=> i.id.toString() === productId);
      setProduct(item);
    },[productId])
  })
  return(
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

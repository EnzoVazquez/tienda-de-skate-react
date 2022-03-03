import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetItems from "../api/api";
import Item from "./Item";
import ItemDetail from './ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { baseDatos } from "../firebase";
// 1ero busca con getItem la lista de productos
// 2do filtra un producto(cualquiera)
// 3ero guardar en un estado ese producto
//pasarle el producto a ItemDetail
export default function ItemDetailContainer(){
  const [product, setProduct] = useState([]);
  const {productId} = useParams()
  useEffect(()=>{
    const productRef = doc(baseDatos, "products", productId)
    getDoc(productRef)
    .then((snapshot)=>{
      if(snapshot.exists()){
        setProduct({id: snapshot.id, ...snapshot.data()})
      }
    }).catch((error) =>{
      console.log(error)
    })
   },[productId])
 
  return(
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

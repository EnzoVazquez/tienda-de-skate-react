import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { baseDatos } from "../firebase";

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

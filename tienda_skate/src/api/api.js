import { getDocs, collection } from "firebase/firestore";
import { baseDatos } from "../firebase";

 export default function GetItems(){
     return new Promise((resolve, rejected)=>{
        const productCollection = collection(baseDatos, "products");

        getDocs(productCollection)
        .then(snapshot =>{
            const products = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
            resolve(products);
            
        }).catch(error =>{
            console.log(error)
        })

    })
 }

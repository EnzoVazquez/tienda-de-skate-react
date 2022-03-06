import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { baseDatos } from "../firebase";
import './AddItemContainer.css'

export default function Add(){


    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [pictureUrl, setPictureUrl] = useState("");
    
    const titleChange = event => setTitle(event.target.value);
    const categoryChange = event => setCategory(event.target.value);
    const priceChange = event => setPrice(event.target.value);
    const pictureUrlChange = event => setPictureUrl(event.target.value);
    
    function onSubmit(e){
        e.preventDefault();
        if([title, category, price, pictureUrl].some(field => field === "")){
           console.log("hay campos vacios")
        } else{
            console.log("validacion correcta");
    
            const itemCollection = collection(baseDatos, "products");
            const newProduct = {
                title: title,
                category: category,
                price: price,
                pictureUrl: pictureUrl
            }
    
            addDoc(itemCollection, newProduct).then(doc =>{
                console.log("se guardo tu producto", doc.id)
            }).catch(error=>{
                console.log("error")
            })
        }
    }
    

return(
    <div className="formulario">
        <h3>Agrega un nuevo producto</h3>
        <form onSubmit={onSubmit}></form>
        <div>
            <label>Nombre del producto</label>
            <input value={title} onChange={titleChange}></input>
        </div>
        <div>
            <label>Precio del producto</label>
            <input value={price} onChange={priceChange}></input>
        </div>
        <div>
            <label>Categoria del producto</label>
            <input value={category} onChange={categoryChange}></input>
        </div>
        <div>
            <label>Url de la imagen</label>
            <input value={pictureUrl} onChange={pictureUrlChange}></input>
        </div>
        <div>
            <button onClick={onSubmit}>Añadir item</button>
        </div>
    </div>
)
}
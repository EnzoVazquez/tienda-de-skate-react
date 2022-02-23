import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Carrito from "./CartWidget";

export default function Cart(){
    const carrito  = useContext(CartContext)
    console.log(carrito)
    return(
        <div>
            {
                carrito.map( function(product){
                    return(
                    <div key={product.product.id}>
                        <h2>{product.product.name}</h2>
                        <p>{product.product.price}</p>
                    </div>
                    )
                })
             }
        </div>
    )
}
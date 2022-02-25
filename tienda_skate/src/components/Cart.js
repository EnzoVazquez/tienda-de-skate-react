import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){
    const {carrito} = useContext(CartContext)
    console.log(carrito)
    return(
        <div>
            {
                carrito.map( function(product){
                    return(
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                    )
                })
             }
        </div>
    )
}
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){
    const {Cart} = useContext(CartContext)
    return(
        <div>
        {
            Cart.map((product)=>{
                <div key={product.product.id}>
                    <h2>{product.product.name}</h2>
                    <p>{product.product.price}</p>
                </div>
            })
        }
        </div>
    )
}
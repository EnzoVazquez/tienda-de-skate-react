import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './cart.css'

export default function Cart(){
    const {carrito, eliminarItem, vaciarCarrito} = useContext(CartContext)

    console.log(carrito);

    return(
        <div>
            {
                carrito.map( function(product){
                    return(
                    <div>
                        <div key={product.product.id} className="itemCarrito">
                            <img src={product.product.pictureUrl}></img>
                            <div className="detalle">
                                <h2>{product.product.title}</h2>
                                <p>$ {product.product.price}</p>
                                <button onClick={eliminarItem}>Eliminar</button>
                            </div>
                        </div>
                        <button onClick={vaciarCarrito}>Eliminar items</button>
                    </div>
                    )
                })
             }
        </div>
    )
}
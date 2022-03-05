import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './cart.css'
import Item from "./Item";

export default function Cart(){
    const {carrito, eliminarItem, vaciarCarrito, sumaTotal} = useContext(CartContext)

    console.log(carrito);

    return(
        <div>
            {
                carrito.map( function(product){
                    return(
                          <div>
                            <div key={product.id} className="itemCarrito">
                              <img src={product.pictureUrl}></img>
                              <div className="detalle">
                                <h2>{product.title}</h2>
                                <p>$ {product.price}</p>
                                <button onClick={()=> eliminarItem(product.id)}>Eliminar</button>
                              </div>
                            </div>
                          </div>
                    )
                })
             }
              <p>El valor total de su compra es</p>
              <p>$ </p>
             <button onClick={vaciarCarrito}>Eliminar items</button>
        </div>
    )
}
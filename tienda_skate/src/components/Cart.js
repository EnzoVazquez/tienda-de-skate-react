import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './cart.css'
import nuevoPedido from "./order";

export default function Cart(){
    const {carrito, eliminarItem, vaciarCarrito, totalPrice} = useContext(CartContext);

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
             <div className="precio">
                <p>El valor total de su compra es</p>
                <p>$ {totalPrice} </p>
              <button onClick={vaciarCarrito}>Eliminar items</button>
              <button onClick={nuevoPedido}>Crear orden de pedido</button>
              <button onClick={totalPrice}>suma</button>
             </div>
        </div>
    )
}
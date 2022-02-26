import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './cart.css'

export default function Cart(){
    const {carrito, setCarrito} = useContext(CartContext)

    console.log(carrito);

    const removeItem = (id) =>{
        const newCarrito = carrito.filter((product) => product.id !== id);
        setCarrito(newCarrito);
    };
    function clear([carrito]){
        carrito.pop()
    }

    return(
        <div>
            {
                carrito.map( function(product){
                    return(
                    <div key={product.product.id} className="itemCarrito">
                        <img src={product.product.pictureUrl}></img>
                        <div className="detalle">
                            <h2>{product.product.title}</h2>
                            <p>$ {product.product.price}</p>
                            <button onClick={removeItem}>Eliminar</button>
                        </div>
                    </div>
                    )
                })
             }
        </div>
    )
}
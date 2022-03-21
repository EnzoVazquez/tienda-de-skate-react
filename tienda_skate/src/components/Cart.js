import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './cart.css'
import { Link } from "react-router-dom";

export default function Cart(){
    const {carrito, eliminarItem, vaciarCarrito, totalPrice} = useContext(CartContext);

    console.log(carrito);
  

    return(
          <div>
          <h1 className="tituloPrincipal">Carrito de compras</h1>
          {carrito.length === 0 ? (
            <div className="ceroProductos">
            <h3 className="">Su carrito aun está vacío</h3>
            <Link to="/">
                <button className='botonInicio'>Ir a comprar</button>
            </Link>
             </div>
             ) : (
               <div>
                { carrito.map((product) =>(
                          <div>
                            <div key={product.id} className="itemCarrito">
                              <img src={product.pictureUrl}></img>
                              <div className="detalle">
                                <h2>{product.title}</h2>
                                <p>cantidad: {product.cantidad}</p>
                                <p>$ {product.price}</p>
                                <button onClick={()=> eliminarItem(product.id)}>Eliminar</button>
                              </div>
                            </div>
                          </div>

             ))
             }
             <div className="precio">
                <p>El valor total de su compra es</p>
                <p>$ {totalPrice()} </p>
              <button onClick={vaciarCarrito} className="botonInicio">Eliminar items</button>
              <Link to={'/Checkout'}>
                <button className="botonInicio">Finalizar compra</button>
              </Link>
             </div>
             </div>
             )}
        </div>
    )
 }
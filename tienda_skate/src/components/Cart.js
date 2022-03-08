import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './cart.css'
import nuevoPedido from "./order";

export default function Cart(){
    const {carrito, eliminarItem, vaciarCarrito, totalPrice} = useContext(CartContext);

    console.log(carrito);

    const NuevoPedido = ()=>{
  
      const pedido ={
          Date: new Date(),
          Buyer:{
              nombre: "Juan",
              apellido: "Velez",
              telefono: 2494063205,
              email: "juan@gmail.com"
         },
          items: carrito,
      }
  
      const baseDatos = getFirestore();
  
      const pedidosCollection = collection(baseDatos, "pedidos");
   
      addDoc(pedidosCollection, pedido).then(({ id }) => pedido.id,
      console.log("tu pedido fue recibido"),);
  }
  

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
                <p>$ {totalPrice()} </p>
              <button onClick={vaciarCarrito}>Eliminar items</button>
              <button onClick={NuevoPedido}>Crear orden de pedido</button>
             </div>
        </div>
    )
}
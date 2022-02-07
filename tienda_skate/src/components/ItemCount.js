import React, { useState } from "react";
import './ItemCount.css'

function ItemCount({stock, initial}){
    const [cantidad, setCantidad] = useState(initial);
    function Sumar(){
        if (cantidad < stock) {
            setCantidad(cantidad +1);
        }
    };
    function Restar(){
        if(cantidad > 0){
            setCantidad(cantidad -1);
        }
    };
    function alCarrito(){
        onAdd(cantidad);
    }
   return(
       <div className="itemCount">
           <div className="botonera">
             <button onClick={Restar} >-</button>
             <p>{cantidad}</p>
             <button onClick={Sumar}>+</button>
           </div>
           <div className="agCarrito">
               <button onClick={alCarrito}>Agregar al carrito</button>
           </div>
       </div>
   )
}

export default ItemCount;
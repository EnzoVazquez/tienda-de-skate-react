import React, { useState } from "react";
import './ItemCount.css'

function ItemCount({stock, initial}){
    const [cantidad, setCantidad] = useState(initial);
    function Sumar(){
        setCantidad(cantidad +1)
    };
    function Restar(){
        setCantidad(cantidad -1)
    };
    
   return(
       <div className="itemCount">
           <div className="botonera">
             <button onClick={Restar} >-</button>
             <p>{cantidad}</p>
             <button onClick={Sumar}>+</button>
           </div>
           <div className="agCarrito">
               <button>Agregar al carrito</button>
           </div>
       </div>
   )
}

export default ItemCount;
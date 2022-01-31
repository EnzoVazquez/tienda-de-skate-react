import React from 'react';
import './NavBar.css';
import carrito from './CartWidget'

export default function NavBar(){
    return(
        <div> 
            <ul>
                <h1>POST MORTEM</h1>
                <a>TABLAS</a>
                <a>TRUCKERS</a>
                <a>RULEMANES</a>
                <a>LIJAS</a>
                <carrito/>
            </ul>
            <div>Todos los lunes 6 cuotas sin interes con tarjeta visa</div>
        </div>
  )  
}

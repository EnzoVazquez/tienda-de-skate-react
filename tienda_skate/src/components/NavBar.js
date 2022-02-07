import React from 'react';
import './NavBar.css';
import Carrito from './CartWidget'

export default function NavBar(){
    return(
        <div> 
            <ul>
                <h1>POST MORTEM</h1>
                <a>TABLAS</a>
                <a>TRUCKERS</a>
                <a>RULEMANES</a>
                <a>LIJAS</a>
                <Carrito/>
            </ul>
            <div className='oferta'>Todos los lunes 6 cuotas sin interes con tarjeta visa</div>
        </div>
  )  
}

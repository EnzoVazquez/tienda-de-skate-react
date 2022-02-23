import React from 'react';
import './NavBar.css';
import Carrito from './CartWidget'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div> 
            <ul>
                <h1>POST MORTEM</h1>
                <a>TABLAS</a>
                <a>TRUCKERS</a>
                <a>RULEMANES</a>
                <a>LIJAS</a>
                <Link to={'/cart'}>
                    <Carrito/>
                </Link>
            </ul>
            <div className='oferta'>Todos los lunes 6 cuotas sin interes con tarjeta visa</div>
        </div>
  )  
}

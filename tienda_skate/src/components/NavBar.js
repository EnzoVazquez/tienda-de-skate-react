import React from 'react';
import './NavBar.css';
import Carrito from './CartWidget'
import { Link, NavLink } from 'react-router-dom';

export default function NavBar(){
    return(
        <div> 
            <ul>
                <h1>POST MORTEM</h1>
                <li><NavLink to="/category/tabla"><a>TABLAS</a></NavLink></li>
                <li><NavLink to="/category/trucks"><a>TRUCKERS</a></NavLink></li>
                <li><NavLink to="/category/rulemanes"><a>RULEMANES</a></NavLink></li>
                <li><NavLink to="/category/lijas"><a>LIJAS</a></NavLink></li>
                <Link to={'/cart'}>
                    <Carrito/>
                </Link>
            </ul>
            <div className='oferta'>Todos los lunes 6 cuotas sin interes con tarjeta visa</div>
        </div>
  )  
}

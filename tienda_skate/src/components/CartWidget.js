import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'

export default function Carrito(){
    const {carrito} = useContext(CartContext);

    function numeroItems(){
        const numero = carrito.length;
        console.log(numero)
    };

    return(
        <div>
            <p><FontAwesomeIcon icon={faShoppingCart}/></p>
            <p>{numero}</p>
            
        </div>
    )
}

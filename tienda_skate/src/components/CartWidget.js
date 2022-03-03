import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { CartContext } from '../context/CartContext'

export default function Carrito(){
    const {carrito} = useContext(CartContext);


    return(
        <div className='.contenedorCarro'>
            <p><FontAwesomeIcon icon={faShoppingCart}/></p>
            <p>{carrito.length}</p>
            
        </div>
    )
}

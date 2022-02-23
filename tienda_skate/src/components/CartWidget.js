import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export default function Carrito(){
    return(
        <p><FontAwesomeIcon icon={faShoppingCart}/></p>
    )
}

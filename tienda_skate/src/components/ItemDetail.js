import'./ItemDetail.css'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ItemDetail(product){
    const {addToCar} = useContext(CartContext)

    const [cantidad, setCantidad] = useState()

    function AgregarItem(cantidad){
        setCantidad(cantidad)
        addToCar(cantidad, product.product)
    }

    return(
        <div className='detalles'>
            <img src={product.product.pictureUrl}></img>
            <div className='texto'>
                <p>{product.product.title}</p>
                <h2>$ {product.product.price}</h2>
                <div>
                {
                    !cantidad ?
                    <ItemCount stock={5} initial={1} onAdd={AgregarItem}/> :
                    <div>
                    <Link to={'/cart'}>
                        <button className='botonDesp'>Ir al carrito</button>
                    </Link>
                    <Link to={'/'}>
                        <button className='botonDesp'>Ir al inicio</button>
                    </Link>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}
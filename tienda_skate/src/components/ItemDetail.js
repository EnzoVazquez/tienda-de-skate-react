import'./ItemDetail.css'
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemDetail(product){
    const [cantidad, setCantidad] = useState()
    function AgregarItem(cantidad){
        console.log(cantidad);
        setCantidad(cantidad);
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
                    <Link to={'/cart'}>
                        <button>Ir al carrito</button>
                    </Link>
                }
                </div>
            </div>
        </div>
    )
}
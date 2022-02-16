import'./ItemDetail.css'

export default function ItemDetail(product){
    return(
        <div className='detalles'>
            <img src={product.product.pictureUrl}></img>
            <div className='texto'>
                <p>{product.product.title}</p>
                <h2>$ {product.product.price}</h2>
                <button>Comprar</button>
            </div>
        </div>
    )
}
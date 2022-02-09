import ItemDetailContainer from "./ItemDetailContainer"

export default function ItemDetail({product}){
    return(
        <div>
            <img src={product.pictureUrl}></img>
            <p>{product.title}</p>
            <h2>$ {product.price}</h2>
        </div>
    )
}
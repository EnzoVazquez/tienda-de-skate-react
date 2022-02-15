import ItemDetailContainer from "./ItemDetailContainer"
import Item from "./Item"

export default function ItemDetail({item}){
    return(
        <div>
            <img src={item.product.pictureUrl}></img>
            <p>{item.product.title}</p>
            <h2>$ {item.product.price}</h2>
        </div>
    )
}
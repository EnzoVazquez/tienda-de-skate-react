import'./ItemDetail.css'

export default function ItemDetail({item}){
    return(
        <div>
            <img src={item.pictureUrl}></img>
            <p>{item.title}</p>
            <h2>$ {item.price}</h2>
            <button>Comprar</button>
        </div>
    )
}
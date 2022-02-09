import './item.css';

export default function Item(Item){
    return(
        <div className='producto' key={Item.Item.id}>
            <img src={Item.Item.pictureUrl} alt="foto producto"/>
            <h2 className='nombreProducto'>{Item.Item.title}</h2>
            <p className='precio'>$ {Item.Item.price}</p>
        </div>
    )
}
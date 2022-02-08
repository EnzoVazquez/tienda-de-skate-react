import './item.css';

export default function Item(){
    return(
        <div className='producto' key={Item.id}>
            <img src={Item.pictureUrl} alt="foto producto"/>
            <h2 className='nombreProducto'>{Item.title}</h2>
            <p className='precio'>{Item.price}</p>
        </div>
    )
}
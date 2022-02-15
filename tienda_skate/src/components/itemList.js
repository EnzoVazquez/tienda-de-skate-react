import './ItemList.css';
import Item from './Item';

export default function ItemList({products}){
    return(
        <div className='itemList'>
            {
                products.map( function(product){
                    return(
                    <Item key={product.id} Item={product}/>
                    )
                })
            }
        </div>
    )
}
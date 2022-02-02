import React from "react";
import ItemCount from "./ItemCount"

function AgregarItems(){

}

function ItemList(){
    return(
        <div>
            <ItemCount stock={5} initial ={1} onAdd={AgregarItems}/>
        </div>
    )
}

export default ItemList;
import React from "react";
import './ItemCount.css'
function ItemCount({stock, initial, onAdd}){
    <div>
        <div id="onAdd">
        <button id="restar">-</button>
        <label>{initial}</label>
        <button>+</button>
        </div>
        <button id="agCarrito">Agregar al Carrito</button>
    </div>
    
    var restar = document.getElementById("restar")
    restar.onclick = function(){
        initial--;
    }
    var sumar = document.getElementById("sumar")
    sumar.onclick = function(){
        initial++;
    }
    var agCarrito = document.getElementById("agCarrito")
    agCarrito.onclick = function(){
        return onAdd
    }
}
export default ItemCount;
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({children}){
    const [carrito, setCarrito] = useState([]);

    function addToCar(cantidad, product){
        if(isOnCart(product.id)){
            sumarItem(cantidad, product)
        }else{
            setCarrito([...carrito,{...product,cantidad}])
        }

    }
    
    function isOnCart(id){
        const respuesta = carrito.some((prod) => prod.id === id);
        return respuesta;
    } 

    function vaciarCarrito(){
        setCarrito([]);
    };

    function sumarItem(cantidad, item){
        const newCarrito = [...carrito]
        newCarrito.forEach((product)=>{
            if(product.id === item.id){
               product.cantidad += cantidad;
            }
        })
    };
    
    function eliminarItem(){
        setCarrito(carrito.filter((product) => product.id !== product.id));
    }

    function sumaTotal(){
        var precioInicial = 0
        carrito.forEach(product => {
            product.price += precioInicial;
            console.log(precioInicial);
            return precioInicial;
        });
    }


    function agCarrito(cantidad, product){
        setCarrito([...carrito, {...product, cantidad}]);
    };

    return(
        <CartContext.Provider value={{sumaTotal, carrito, agCarrito, eliminarItem,vaciarCarrito, sumarItem, addToCar}}>
            {children}
        </CartContext.Provider>
    )
}
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({children}){
    const [carrito, setCarrito] = useState([]);

    function agCarrito(cantidad, product){
        setCarrito([...carrito, {...cantidad, product}])
    };

    return(
        <CartContext.Provider value={carrito, agCarrito}>
            {children}
        </CartContext.Provider>
    )
}
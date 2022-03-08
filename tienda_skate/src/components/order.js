import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NuevoPedido = ()=>{
   
    const {carrito} = useContext(CartContext);

    const pedido ={
        Date: new Date(),
        Buyer:{
            nombre: "Juan",
            apellido: "Velez",
            telefono: 2494063205,
            email: "juan@gmail.com"
       },
        items: carrito,
    }

    const baseDatos = getFirestore();

    const pedidosCollection = collection(baseDatos, "pedidos");
 
    addDoc(pedidosCollection, pedido).then(({ id }) => pedido.id,
    console.log("tu pedido fue recibido"),);
}

export default NuevoPedido;
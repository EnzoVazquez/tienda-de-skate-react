import { addDoc, collection, getFirestore } from "firebase/firestore";


const NuevoPedido = ()=>{

    const baseDatos = getFirestore();

    const pedidosCollection = collection(baseDatos, "pedidos");

    const pedido ={
        comprador: {name: "Juan", phone: "256595", email: "juan@gmail.com"},
        items: [{cantidad: 1, name: "Tabla WOODOO BH STRAWBERRY", price: 7700}],
        total: 7700,
    };
 
    addDoc(pedidosCollection, pedido).then(({ id }) => pedido.id,
    console.log("tu pedido fue recibido"),);
}

export default NuevoPedido;
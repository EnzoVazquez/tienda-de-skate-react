import { react, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import './checkout.css'
import { Link } from "react-router-dom";


export default function Checkout(){
    const {carrito, totalPrice, vaciarCarrito} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");
    const [repetirMail, setRepetirMail] = useState("");

    const inputNombreChange = event => setNombre(event.target.value);
    const inputTelefonoChange = event => setTelefono(event.target.value);
    const inputMailChange = event => setMail(event.target.value);
    const inputApellidoChange = event => setApellido(event.target.value);
    const inputRepetirMailChange = event => setRepetirMail(event.target.value)
    
    const nuevoPedido = () =>{
        const pedido = {
            buyer : {nombre, apellido, mail, telefono},
            products : carrito,
            total: totalPrice(),
        };
        const baseDatos = getFirestore();
  
      const pedidosCollection = collection(baseDatos, "pedidos");
   
      addDoc(pedidosCollection, pedido).then(({ id }) => pedido.id,
      console.log("tu pedido fue recibido"),);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(mail === repetirMail){
            nuevoPedido();
            vaciarCarrito();
            e.target.reset();
        }else{
            alert("los mails no coinciden")
        }
    }

    return(
        <div>
            <h1 className="tituloFormulario">Formulario de compra</h1>
            <div>
                <h2 className="tituloSecundario">Tus productos</h2>
                {
                    carrito.map((product) =>(
                        <div className="resumen">
                            <div>
                                <img src={product.pictureUrl} className="imagenChica" ></img>
                            </div>
                            <div className="itemCarrito">
                                <p>{product.title}</p>
                                <p>$ {product.price}</p>
                                <p>cantidad: {product.cantidad}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="totalPrice">
                Precio total: $ {totalPrice()}
            </div>
            <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label>Nombre</label>
                    <input value={nombre} onChange={inputNombreChange} type="text"></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input value={apellido} onChange={inputApellidoChange} type="text"></input>
                </div>
                <div>
                    <label>Telefono</label>
                    <input value={telefono} onChange={inputTelefonoChange} type="number"></input>
                </div>
                <div>
                    <label>Mail</label>
                    <input value={mail} onChange={inputMailChange} type="email"></input>
                </div>
                <div>
                    <label>Confirme su mail</label>
                    <input value={repetirMail} onChange={inputRepetirMailChange} type="email"></input>
                </div>
                <div>
                    <button type="submit" className="botonClasico">Finalizar compra</button>
                    <Link to={'/'}>
                        <button className="botonClasico">Ir al inicio</button>
                    </Link>
                </div>
            </div>
            </form>
        </div>
    )
}
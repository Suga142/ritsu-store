import { addDoc, getFirestore, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useCartContext } from "./context/CartContext";

const Checkout = () => {
    const { cartList, totalPrice } = useCartContext();
    
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [orderId, setOrderId] = useState("");

    const createOrder = () => {
        const fecha = new Date();
        const order = {
            buyer: {nombre:nombre, telefono:telefono, correo:correo},
            items: cartList.map(item => ({id:item.id, title:item.name, price: item.price})),
            total: totalPrice(),
            orderDate: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
        });

    }

    return (
        <div className="container text-center">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su número de teléfono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="correo" className="form-label">Correo Electrónico:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su correo electrónico" onInput={(e) => {setCorreo(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-info mt-3" onClick={createOrder}>Completar pedido</button>
                    </form>
                </div>
                <div className="col-md-6">
                    {cartList.map(product =>
                        <div className="border border-start-0 border-end-0 border-dark">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <p className="col-md-3">Producto</p>
                                <p className="col-md-3">Cantidad</p>
                                <p className="col-md-3">Costo</p>
                            </div>
                            <div className="row">
                                <img className="col-md-2 pb-3 mb-2" src={product.img} alt="product" />
                                <p className="col-md-3">{product.name}</p>
                                <p className="col-md-3">{product.quantity}</p>
                                <p className="col-md-3">${product.price * product.quantity}</p>
                            </div>
                        </div>
                    )}
                    <h4 className="mt-3">Total: ${totalPrice()}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {orderId ? 
                        <div className="alert alert-info" role="alert">
                            Su pedido se ha realizado con éxito! Este es su número de pedido: <b>{orderId}</b>
                        </div>
                        : 
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout;
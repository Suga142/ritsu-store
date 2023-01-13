import React from "react";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();
    return (
        <div className="container align-items-center text-center">
            <div className="col-md-12 alert alert-info text-center" role="alert">
                <h3>Tus productos:</h3>
            </div>
            {cartList.map(product =>
                <div className="border border-start-0 border-end-0 border-dark ">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <p className="col-md-3">Producto</p>
                        <p className="col-md-3">Cantidad</p>
                        <p className="col-md-3">Costo</p>
                    </div>
                    <div className="row">
                        <img className="col-md-1 ml-3 pb-3 mb-2" src={product.img} alt="product" />
                        <p className="col-md-3">{product.name}</p>
                        <p className="col-md-3">{product.quantity}</p>
                        <p className="col-md-3">${product.price * product.quantity}</p>
                        <button type="button" className="col-md-1 btn btn-danger h-25" onClick={() => removeProduct(product.id)}>X</button>
                    </div>
                </div>

            )}
            {cartList.length === 0 ?
                <h5 className="alert alert-info" role="alert">Aún no agregas ningún producto.</h5>
                :
                <div className="container">
                    <div className="col-md-12 mt-3 mb-4">
                        <h4 className="mb-4">Total: ${totalPrice()}</h4>
                        <button type="button" className="btn btn-danger" onClick={cleanCart}>Vaciar carrito</button>
                    </div>
                    <div className="col-md-12 pb-1">
                        <Link to={"/checkout"}>
                            <button type="button" className="btn btn-info mb-3">
                                Finalizar compra.
                            </button>
                        </Link>
                    </div>

                </div>
            }

        </div>

    )
}

export { Cart }
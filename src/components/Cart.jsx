import React from "react";
import { useCartContext } from "./context/CartContext";


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    console.log(cartList)
    return (
        <div className="d-flex flex-column  align-items-center text-center">
            <div className="alert alert-info text-center" role="alert">
                <h3>Tus productos:</h3>
            </div>
            {cartList.map(product =>
                <div key={product.id}>
                    <img src={product.img} alt="product" width="150px" />
                    <button type="button" className="btn btn-danger" onClick={() => removeProduct(product.id)}>X</button>
                    <p>{product.name}</p>
                    <p className="pt-0">Cantidad: {product.quantity}</p>
                    <p>${product.price * product.quantity}</p>

                </div>
            )}
            {cartList.length === 0 ?
                <h5 className="alert alert-info" role="alert">Aún no agregas ningún producto.</h5>
                :
                <div>
                    <p>Total: ${totalPrice()}</p>
                    <button type="button" className="btn btn-danger" onClick={cleanCart}>Vaciar carrito</button>
                </div>
            }

        </div>

    )
}

export { Cart }
import React from "react";
import { useCartContext } from "./context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {

    const {totalQuantity} = useCartContext();

    return (

        <NavLink to={"cart"}>
            <button type="button" className="btn btn-info position-relative">
                <img src="/img/cart3.svg" alt="CartWidget" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalQuantity()}</span>
            </button>
        </NavLink>
    )
}

export default CartWidget;
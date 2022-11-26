import React from "react";

const CartWidget = () => {

    return (
        <div>
            <button type="button" className="btn btn-warning position-relative">
                <img src="img/cart3.svg" alt="CartWidget" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget;
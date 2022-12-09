import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const increase = () => count < stock && setCount(count + 1);

    const decrease = () => count > initial && setCount(count - 1);



    return (
        <div>

            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <button onClick={decrease} type="button" className="btn btn-outline-info">-</button>
                                <button type="button" className="btn btn-info">{count}</button>
                                <button onClick={increase} type="button" className="btn btn-outline-info">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-outline-info texxt-center">Agregar al Carrito.</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ItemCount;
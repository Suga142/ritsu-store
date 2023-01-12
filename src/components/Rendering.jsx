import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemListContainer from "./ItemListContainer";

const Load = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

const Rendering = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <div className="m-5">
            {loading ? <Load/> : <ItemListContainer/>}
        </div>
    )
}

export default Rendering;
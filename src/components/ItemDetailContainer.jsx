import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import products from "./json/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find(item => item.id === parseInt(id) ));
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })

    }, [id] );

    return(
        <div className="container">
            <ItemDetail item = {item} />
        </div>
    )
}

export default ItemDetailContainer;
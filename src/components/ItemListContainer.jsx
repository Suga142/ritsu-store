import React from "react";
import products from "./json/products.json";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? products.filter(item => item.categoria === id) : products);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })

    }, [id] );

    return (
        

        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
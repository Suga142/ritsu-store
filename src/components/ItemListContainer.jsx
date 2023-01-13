import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Greeting from "./Greeting";
import {getDocs, collection, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");

        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })
            ))
        });
    }, [id])

    return (


        <div className="container">
            <Greeting greeting={"¡Bienvenido a Ritsu Store, donde lo Fántastico puede ser real!"} />
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
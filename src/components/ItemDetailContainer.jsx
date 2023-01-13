import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();


        useEffect(() =>{
            const db = getFirestore();
            const item = doc(db, "products", id);
            getDoc(item).then((snapShot) => {
                if (snapShot.exists()) {
                    setItem({id: snapShot.id, ...snapShot.data()});
                } else {
                    console.log("El Producto no Existe!")
                }
            })
        }, []);


    return(
        <div className="container">
            {<ItemDetail item = {item} /> }

        </div>
    )
}

export default ItemDetailContainer;
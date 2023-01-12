import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import products from "./json/products.json";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    /* useEffect(() => {
         const promesa = new Promise((resolve, reject) => {
             setTimeout(() => {
                 resolve(products.find(item => item.id === parseInt(id) ));
             }, 2000);
            });

         promesa.then((data) => {
             setItem(data);
            })

        }, [id] );*/

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
import React from "react";
//import products from "./json/products.json";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Greeting from "./Greeting";
import { addDoc, getDocs, collection, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    /*   useEffect(() => {
           const promesa = new Promise((resolve, reject) => {
               setTimeout(() => {
                   resolve(id ? products.filter(item => item.categoria === id) : products);
               }, 2000);
           });
   
           promesa.then((data) => {
               setItems(data);
           })
   
       }, [id] );*/


    // Comando para subir collection de products
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");

        products.forEach((item) => {
            addDoc(itemsCollection, item);
        })
    }, [])*/

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");

        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        // const q = query(itemsCollection, where("precio", "<" ,9000)); //Conulta de Filtrado


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
import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "./context/CartContext";
import { useState } from "react";

const ItemDetail = ({item}) => {

    const [isAdded, setIsAdded] = useState(false);

    const {addToCart, cartList} = useCartContext();

    const onAdd = (quantity) =>{
        addToCart(item, quantity);
        setIsAdded(true)
    }
console.log(cartList);
    return(
        <div className="row">
            <div className="col-md-4">
                <img src={item.img} alt={item.name}  className="img-fluid" />
            </div>

            <div className="col-md-4">
                <h1>{item.name}</h1>
                <h4>{item.category}</h4>
                <p> <b>${item.price}</b> </p>
                <ItemCount initial = {1} stock = {item.stock} onAdd= {onAdd}/>
            </div>
        </div>

    
    )
}

export default ItemDetail;
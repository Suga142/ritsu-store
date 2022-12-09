import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    return(
        <div className="row">
            <div className="col-md-4">
                <img src={item.img} alt={item.nombre}  className="img-fluid" />
            </div>

            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <h4>{item.categoria}</h4>
                <p> <b>${item.precio}</b> </p>
                <ItemCount initial = {1} stock = {item.stock} onAdd= {() => {}}/>
            </div>
        </div>

    
    )
}

export default ItemDetail;
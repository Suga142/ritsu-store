import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {


    return (
        <div className="col-md-4 p-4">

            <Link to={"/item/" + item.id} className="text-dark-info text-decoration-none" >
                <div className="card text-center border border-0">
                    <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <p className="card-text">{item.name}</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Item;
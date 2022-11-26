import React from "react";

const ItemListContainer = ({greeting}) => {

    return (
        <div className="container greeting">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-info text-center" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
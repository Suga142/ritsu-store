import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    return(
        <div>
            <NavBar />
            <ItemListContainer greeting = {"¡Bienvenido a Ritsu Store, donde lo Fántastico puede ser real!"} />
        </div>
    )
}

export default App;
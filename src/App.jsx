import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404";
import Greeting from "./components/Greeting";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";



const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Greeting  greeting = {"¡Bienvenido a Ritsu Store, donde lo Fántastico puede ser real!"} />
            
            <Routes>
                <Route  path={"/"} element = {<ItemListContainer/>}/>
                <Route  path={"/categoria/:id"} element = {<ItemListContainer />}/>
                <Route  path={"/item/:id"} element = {<ItemDetailContainer />}/>
                <Route  path ={"*"} element = {<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
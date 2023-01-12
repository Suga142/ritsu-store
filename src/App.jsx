import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import {CartContextProvider} from "./components/context/CartContext";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Rendering from "./components/Rendering";



const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route exact path={"/"} element={<Rendering />} />
                    {/* <Route exact path={"/"} element={<ItemListContainer />} /> */}
                    <Route exact path={"/category/:id"} element={<ItemListContainer />} />
                    <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route exact path={"/cart"} element={<Cart/>} />
                    <Route exact path={"*"} element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;
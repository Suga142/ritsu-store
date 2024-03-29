import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import Checkout from "./components/Checkout";
import {CartContextProvider} from "./components/context/CartContext";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
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
                    <Route exact path={"/category/:id"} element={<ItemListContainer />} />
                    <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route exact path={"/cart"} element={<Cart/>} />
                    <Route exact path={"/checkout"} element={<Checkout/>} />
                    <Route exact path={"*"} element={<Error404 />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;
import React from "react";
import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => cartList.find(product => product.id === id);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map(product => {
                if (product.id === item.id) {
                    const newQuantity = product.quantity + quantity;
                    return { ...product, quantity: newQuantity }
                }else {
                    return product;
                }

            })
            setCartList(newCart)
        }else {
            const newProduct = {...item, quantity}
            setCartList([...cartList, newProduct]);
        }
    }

    const removeProduct = (id) => setCartList(cartList.filter(product => product.id !== id));

    const cleanCart = () => setCartList([]);

    const totalPrice = () => {
        return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0);
    }

    const totalQuantity = () => {
        return cartList.reduce((acc, product) => acc += product.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart,
            totalPrice,
            totalQuantity,
            cartList
        }}>
            {children}
        </CartContext.Provider>
    )
}

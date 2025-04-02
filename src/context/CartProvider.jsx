/* eslint-disable no-unused-vars */
import { useState } from "react";
import { cartContext } from './cartContext';

export default function CartProvider ({ children }){

    const [cart, setCart]  = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const getQuantity = () => {
        const quantities = cart.map(item => item.quantity)
        const result = quantities.reduce((accumulator, currentValue) => accumulator + currentValue,0);
    
        return result
    }

     const getTotal = () => {
        const prices = cart.map(item => item.precio*item.quantity)
        const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue,0);
    
        return total
    }

    const emptyCart = () => {
          setCart([])
    }

    return(
        <cartContext.Provider value={ { addToCart, getQuantity, getTotal, cart, emptyCart } }>
            {children}
        </cartContext.Provider>
    )
}
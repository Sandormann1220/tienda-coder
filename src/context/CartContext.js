import { createContext, useContext } from 'react'

export const cartContext = createContext();
 //Hook propio

 export const useCart = () => useContext(cartContext);
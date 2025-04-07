import { useState } from "react";
import { cartContext } from "./CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartProvider ({ children }){
    const MySwal = withReactContent(Swal) 
    const [cart, setCart]  = useState([])

    const addToCart = (item) => {
        const id = item.id;
        const itemExists = cart.find(item => item.id === id)
        if(!itemExists){
            MySwal.fire({
                title: <p>¿Deseas agregar <i>{item.titulo} de {item.autor}</i> a tu carrito?</p>,
                showCancelButton: true,
                confirmButtonText:'Sí',
                confirmButtonColor: 'rgba(71, 208, 243, 0.86)',
                cancelButtonText: 'No',
                cancelButtonColor: 'rgba(192, 76, 221, 0.89)'
              }).then((res) => {
                if(res.isConfirmed) setCart([...cart, item])
              })
            
        }else{
            MySwal.fire({
                title: <p>Ya agregaste este título</p>
            })
        }
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
        //Se pueden pasar diferentes datos o funciones como un arreglo
        <cartContext.Provider value={ { addToCart, getQuantity, getTotal, cart, emptyCart } }>
            {children}
        </cartContext.Provider>
    )
}
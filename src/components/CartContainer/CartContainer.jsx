
import { useCart } from "../../context/cartContext"
import styles from './CartContainer.module.css'
import { useNavigate, useParams } from 'react-router'
import { getProducts } from "../../firebase/db"
import { useEffect } from "react"
import { useState } from "react"

export default function  CartContainer(){
const Navigate = useNavigate()
const { cart } = useCart()
const { id }  = useParams();
const [ Products, setProducts ] = useState([])

useEffect(() => {
     getProducts().then(res => setProducts(res))
},[id])

const handleClick = ()=>{
    Navigate('/checkOutForm')
}



const handleDeleteItem = () => {

        console.log(`Borrar elemento ${id}`)
        console.log(Products.map(item => item.id))

}

    return(
        <section className={styles.container}>
            <h1>Tus productos en el carrito</h1>
                <p className={styles.cta} onClick={handleClick}>Proceder al pago</p>
            <div className={styles.card_container}>
                {cart.map(item => (
                    <div key={item.id} className={styles.card}>
                            <span   className={styles.span_cant}>Cant: {item.quantity}</span>
                            <p className={styles.card_title}>{item.titulo}</p>
                            <figure className={styles.card_image}>
                                <img src={item.imagen} alt={item.titulo} className={styles.card_img} />
                            </figure>
                            <figure className={styles.icon_container} onClick={handleDeleteItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.btn_delete} viewBox="0 0 24 24">
                                    <path className={styles.svg} d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                </svg>
                            </figure>
                    </div>))}
            </div>
        </section>
    )
}
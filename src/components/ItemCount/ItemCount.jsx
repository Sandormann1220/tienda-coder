import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import styles from './ItemCount.module.css'

export default function ItemCount( {product}){
     const [count, setCount] = useState(0)
     const { addToCart } = useContext(cartContext)

    
    const handleAdd = ()=>{
        setCount(count + 1);
    }

    const handleSubs = ()=>{
        setCount(count  - 1);
    }
    const handleAddToCart = () => {
        console.log(product)
        addToCart({...product, quantity: count})
        console.log(product)
    }
    
    return(
        <div className={styles.countContainer}>
            <p className={styles.quantity}>Cantidad: {count}</p>
            <button onClick={handleAdd} className={styles.btn}>+</button>
            <button onClick={handleSubs} className={styles.btn}>-</button>
            <button onClick={handleAddToCart} className={styles.addToCart}>Agregar</button>
        </div>
    )
}
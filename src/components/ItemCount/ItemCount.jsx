import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import styles from './ItemCount.module.css'

export default function ItemCount( {product}){
     const [ count, setCount ] = useState(0)
     const [ disabled, setDisabled ] = useState(false)
     const { addToCart } = useContext(cartContext)

     
    
    const handleAdd = ()=>{
        setCount(count + 1);
        setDisabled(false)
        disabledSpan(false)
    }

    const handleSubs = ()=>{
        setCount(count  - 1);
        if(count <= 0){
            setDisabled(true)
            setCount(0)
        }
    }
    const handleAddToCart = () => {
        if(count !== 0){
            addToCart({...product, quantity: count})
        }
    }
    
    return(
        <div className={styles.countContainer}>
            <p className={styles.quantity}>Cantidad: {count}</p>
            <button onClick={handleAdd} className={styles.btn}>+</button>
            <button onClick={handleSubs} disabled={disabled} className={styles.btn}>-</button>
            <button onClick={handleAddToCart} className={styles.addToCart}>Agregar</button>
        </div>
    )
}
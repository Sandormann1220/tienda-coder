import styles from'./CartWidget.module.css'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router'

export default function CartWidget(){
    const { getQuantity } = useContext(cartContext)
    const Navigate = useNavigate()
   
    //Manejador de eventos
    const total = getQuantity()
    const handleClick = () => {
        Navigate('/cart')
    }
    //
    // 
    
    return(
        <div className={styles.cart}>
				<svg onClick={ handleClick }  xmlns={styles.cart_item_counter} className={styles.cart_image} viewBox="0 0 24 24" ><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
				<div className={styles.cart_item_counter}>{total}</div>
		</div>
    )
}
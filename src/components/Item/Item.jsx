import { Link } from "react-router";
import styles from './Item.module.css'

export default function Item( { product }){

    return(
        <>
            <div key={product.id} className={styles.card}>
                <figure className={styles.container__img}>
                    <img src={product.imagen} alt={product.titul} className={styles.card__img} />
                </figure>
                <h2 className={styles.card__title}>{product.titulo}</h2>
                <p>{product.categoria}</p>
                <p>${product.precio}</p>
                <Link to={`/item/${product.id}`} className={styles.cta}>Ver más</Link>
            </div>
        </>
    )
}
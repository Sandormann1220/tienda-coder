import ItemCount from '../ItemCount/ItemCount';
import styles from './ItemDetail.module.css'


export default function ItemDetail({detail}){
    return (
      <>
        <h2 className={styles.title_description}>{detail?.title}</h2>

        <div className={styles.product_container}>
          <figure className={styles.product_image}>
            <img src={detail?.image} className={styles.product_img} />
          </figure>

          <div className={styles.product_text}>
            <p className={styles.description}>{detail?.description}</p>
            <p className={styles.price}>$ {detail?.price}</p>
            <ItemCount product={detail}/>
          </div>
          
        </div>
      </>
    );

}
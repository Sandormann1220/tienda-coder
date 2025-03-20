import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailsContainer.module.css'
import { getProduct } from "../../firebase/db"

export default function ItemDetailsContainer(){
    const [ detail,setDetail ] = useState();
    const { id } = useParams();

    useEffect(()=>{   
        getProduct().then(res => setDetail(res))
    },[id])

    return(
        <section className={styles.product_description}>    
            <ItemDetail  detail={detail}/>
        </section>
    )
}
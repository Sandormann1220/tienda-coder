import { useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemList from "../ItemList.jsx";
import styles from './Products.module.css'
import { getProducts, getProductsByCategory } from "../../firebase/db";


export default function Products(){
	const [items, setItems] = useState([]);
    const { id } = useParams()

	useEffect(() => {
		if(id){
			getProductsByCategory(id).then(res => setItems(res))
		}else{
			getProducts().then(res => setItems(res))
		}
				
	 },[id])
	
	return(
			<section className={styles.gallery_container}>
				<h1>Catálogo de productos</h1>
				<div className={styles.products_container}>	
					{<ItemList items={items} />}
				</div>
			</section>
		)
}
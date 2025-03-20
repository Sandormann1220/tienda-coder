import { useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemList from "../ItemList.jsx";
import styles from './Products.module.css'
import { getProducts, getProductsByCategory } from "../../firebase/db";


export default function Products(){
	const [products, setProducts] = useState([]);
    const { id } = useParams()

	useEffect(() => {
			getProducts().then(res => setProducts(res))	
	 },[id])
	
	return(
			<section className={styles.gallery_container}>
				<h1>Catálogo de productos</h1>
				<div className={styles.products_container}>	
					{<ItemList products={products} />}
				</div>
			</section>
		)
}
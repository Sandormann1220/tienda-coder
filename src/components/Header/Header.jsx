import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar.jsx'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router';


export default function Header(){
	return(
			<header>
				<div className={styles.banner}>
					<h2 className={styles.banner_text}>Revisa nuestras promociones</h2>
				</div>
				<div className={styles.container}>
					<Link to={"/"}>
						<figure link to className={styles.image}>
							<img src={logo} class={styles.img} alt="logo"/>
						</figure>	
					</Link>
					<div className={styles.cart}><CartWidget /></div>
				</div>
				<Navbar />
			</header>
		)
}
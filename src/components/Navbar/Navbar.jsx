import styles from './Navbar.module.css'
import { Link } from 'react-router'
export default function Navbar(){

	return(
			<nav>
				<ul>
					<li><Link to={"/categpria/fabula"} className={styles.nav_link}>Fábula</Link></li>
					<li><Link to={"/categpria/novela"} className={styles.nav_link}>Novela</Link></li>
					<li><Link to={"/categpria/ciencia ficcion"} className={styles.nav_link}>Ficción</Link></li>
					<li><Link to={"/categpria/Romance"} className={styles.nav_link}>Romance</Link></li>
				</ul>
			</nav>

		)
}
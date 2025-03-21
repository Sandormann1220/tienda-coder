import styles from './Navbar.module.css'
import { NavLink } from 'react-router'

export default function Navbar(){

	return(
			<nav>
				<ul>
					<li><NavLink to={"/categoria/fabula"} className={styles.nav_link}>Fábula</NavLink></li>
					<li><NavLink to={"/categoria/novela"} className={styles.nav_link}>Novela</NavLink></li>
					<li><NavLink to={"/categoria/ficcion"} className={styles.nav_link}>Ficción</NavLink></li>
					<li><NavLink to={"/categoria/cuento"} className={styles.nav_link}>Cuento</NavLink></li>
				</ul>
			</nav>

		)
}
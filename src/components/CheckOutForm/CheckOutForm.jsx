import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../../firebase/db.js'
import styles from './CheckOutForm.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router'

export default function CheckOutForm(){
	const { cart, getTotal } = useContext(cartContext)
	const MySwal = withReactContent(Swal) 
	const Navigate = useNavigate()

	const handleSubmit = async (e)=>{
		e.preventDefault()

		const form = e.target
		const email = form.email.value
		const name = form.name.value
		const phone = form.phone.value

		const order = {
			items: cart,
			user: { fullname:name, email, phone},
			time: serverTimestamp(),
			total: getTotal()
		}

		const id = await createOrder(order)

		MySwal.fire({
			title: <p>Gracias por tu compra</p>,
			text: `El ID de tu compra es ${id}`
			// didOpen: () => {
			//   // `MySwal` is a subclass of `Swal` with all the same instance & static methods
			//   MySwal.showLoading()
			// },
		  }).then(() => {
			Navigate('/')
			// return MySwal.fire(<p>Shorthand works too</p>)
		  })
	}
	return(
			<section className={styles.container}>
				<form onSubmit={handleSubmit} className={styles.form}>
							<label for="email" className={styles.label}>Mail:</label>
							<input type="email" id="email" className={styles.input} placeholder="sandormann@correo.com" required/>

							<label for="name" className={styles.label}>Name:</label>
							<input type="text" id="name" className={styles.input} placeholder="Sandormann" required/>

							<label for="phone" className={styles.label}>Phone:</label>
							<input type="phone" id="phone" className={styles.input} placeholder="+55226644" required/>

							<button type="submit" className={styles.submit_btn}>Finalizar comprar</button>
				</form>
			</section>
			



		)
}
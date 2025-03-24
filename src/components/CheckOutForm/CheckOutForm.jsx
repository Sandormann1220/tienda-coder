import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../../firebase/db.js'


export default function CheckOutForm(){
	const { cart, getTotal } = useContext(cartContext)
	

	const handleSubmit = (e)=>{
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
		createOrder(order)
	}
	return(

			<form onSubmit={handleSubmit}>
				<label for="email">Mail:</label>
				<input type="email" id="email" placeholder="sandormann@correo.com" required/>

				<label for="name">Name:</label>
				<input type="text" id="name" placeholder="Sandormann" required/>

				<label for="phone">Mail:</label>
				<input type="phone" id="phone" placeholder="+55226644" required/>

				<button type="submit">Finalizar comprar</button>
			</form>



		)
}
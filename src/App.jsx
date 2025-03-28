import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Footer from './components/Footer/footer'
import Error from './components/Error.jsx'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import CartContainer from './components/CartContainer/CartContainer'
import CheckOutForm from './components/CheckOutForm/CheckOutForm.jsx'


function App() {

  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index path='/' element={<Products />} />
            <Route path='/categoria/:id' element={<Products />}/>
            <Route path='/item/:id' element={<ItemDetailsContainer />}/> 
            <Route path="/cart" element={<CartContainer />}/>
            <Route path="/checkOutForm" element={<CheckOutForm />}/>
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

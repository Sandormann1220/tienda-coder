import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
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
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:id' element={<ItemListContainer />}/>
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

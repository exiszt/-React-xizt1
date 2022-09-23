import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './context/CartContext'
import Formulario from './components/Formulario'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="categoria/:categoryName" element={<ItemListContainer />} />
          <Route path="item/:idProd" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/formulario" element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
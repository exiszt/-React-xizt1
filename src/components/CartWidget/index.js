import './style.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    
    <div className="contenedorGeneral">
      <div className="contenedorCarrito">
      <img className="carrito" src={require('./carrito.png')} />
      <span className="contadorCarrito">{cart.reduce((acc, prod) => acc + prod.quantity, 0)}</span>
      </div>
    </div>
  )
}

export default CartWidget
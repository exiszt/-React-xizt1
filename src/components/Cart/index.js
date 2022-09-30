import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './style.css'
// import Formulario from "../Formulario"

const Cart = () => {

  const { cart, clearCart, deleteProduct } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setTotal((cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)))
  }, [update])

  const deleteCartItem = (id) => {
    deleteProduct(id)
    !update
    ? setUpdate(true)
    : setUpdate(false)
  }

  const deleteCart = () => {
    clearCart()
    !update
    ? setUpdate(true)
    : setUpdate(false)
  }

  return (

    <div>
      <h2 className="cartTitulo">Cart</h2>

      {cart.map((item) => (
        <section key={item.id} className="cartSubTitles" >
          <div className="cartMiniatura">
            <img src={item.image} alt={item.title} className="cartMiniaturaImg" />
            <h2 className="cartMiniaturaTitulo">{item.title}</h2>
          </div>
          <span className="cartDatosCompra">${item.price} x {item.quantity} unidad/es</span>
          <span className="cartDatosCompra cartSubtotal">${item.price * item.quantity}</span>
          <button className="cartBoton eliminarProducto" onClick={() =>
            deleteCartItem(item.id)}>
            Quitar producto
          </button>
        </section>
      ))}
      {cart.length === 0
        ?
        (
          <div>
            <h2>No hay productos en tu carrito</h2>
          </div>
        )

        :
        <div>
          <h2 className="cartTitulo">Total: ${total}</h2>
          <button className="cartBoton eliminarCart" onClick={deleteCart}>Elminar Cart</button>
          <Link to={'/formulario'}>
            <button className="cartBoton confirmarCompra">
              Confirmar compra
            </button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Cart
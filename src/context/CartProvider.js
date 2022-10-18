import { useState } from "react"
import { CartContext } from "./CartContext"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Agregar productos al carrito

  const addQuantity = (item, quantity, stock) => {
    const exist = cart.find((el) => el.id === item.id)
    if (exist) {
      if (exist.stock < quantity) {
        Toastify({
          text: (`¡Lo sentimos! Nos quedan ${exist.stock} unidades en stock`),
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "red",
          },
          onClick: function () { }
        }).showToast()
      } else {
        exist.quantity = exist.quantity + quantity
        exist.stock = exist.stock - quantity
        setCart([...cart])
        Toastify({
          text: "Producto/s agregado/s satisfactoriamente",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#00c3ff",
          },
          onClick: function () { }
        }).showToast()
      }
    } else {
      setCart([...cart, { ...item, quantity, stock }])
      Toastify({
        text: "Producto/s agregado/s satisfactoriamente",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#00c3ff",
        },
        onClick: function () { }
      }).showToast()
    }
  }

  // Eliminar producto del carrito

  const deleteProduct = (prodId) => {
    setCart(cart.filter((prod) => prod.id !== prodId))
  }

  // Borrar todos productos del carrito

  const clearCart = () => {
    setCart([])
  }


  return (
    <CartContext.Provider value={{ cart, addQuantity, clearCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
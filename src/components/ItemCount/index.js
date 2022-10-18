import "./style.css"
import { useState } from "react"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

function ItemCount({ stock, onAdd }) {
  const [quantity, setCantidad] = useState(0)

  const sumar = () => {
    if (stock) {
      if ((stock - quantity) != 0) {
        setCantidad(quantity + 1)
      } else {
        return
      }
    } else {
      Toastify({
        text: ("Máximo de stock disponible"),
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
    }
  }

  const restar = () => quantity > 0
    ? setCantidad(quantity - 1)
    : Toastify({
      text: ("Seleccione una cantidad mayor a 0 (cero)"),
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

  const confirmar = () => {
    if (quantity === 0) {
      return
    } else {
      onAdd(quantity)
    }
  }

  return (
    <div>
        <p className="unidades">{stock} unidades</p>
      <div className="contador">
        <span><button className="restarSumar" onClick={restar}>-</button></span>
        <div>
          <p>{quantity}</p>
        </div>
        <span><button className="restarSumar" onClick={sumar}>+</button></span>
      </div>
      <button
        className="botonAgregar"
        onClick={confirmar}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
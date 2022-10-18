import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore"
import moment from "moment/moment"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import "./style.css"

const Cart = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [update, setUpdate] = useState(false)
  const db = getFirestore()
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const createOrder = () => {

    // Datos de la orden de compra

    const order = {
      buyer: {
        name: `${users.name}`,
        phone: `${users.phone}`,
        email: `${users.email}`,
      },
      items: cart,
      total: cart.reduce((oldValue, currentValue) => oldValue + (currentValue.price * currentValue.quantity), 0),
      date: moment().format()
    }

    // Búsqueda de la colección "orders" en database

    const query = collection(db, 'orders')
    addDoc(query, order)
      .then(({ id }) => {
        console.log(`ID de la compra: ${id}`)
        updateStockProducts(cart)
        Toastify({
          text: (`¡Gracias por su compra, ${users.name}!`),
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
      })
      .catch(() => {
        Toastify({
          text: (`¡Lo sentimos, ${users.name}! Hubo un problema con su compra`),
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
      )
  }

  // Actualizar la colección "items" en database

  const updateStockProducts = () => {
    cart.forEach(product => {
      const queryUpdate = doc(db, 'items', product.id)
      updateDoc(queryUpdate, {
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        title: product.title,
        stock: product.stock,
      })
        .then(() => {
          if (cart[cart.length - 1].id === product.id) {
            deleteCart()
            navigate('/')
          }
        })
        .catch(() => {
          console.log('Error al actualizar stock')
        })
    })
  }

  useEffect(() => {
    setTotal((cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)))
  }, [update])

  // Eliminar producto del cart

  const deleteCartItem = (id) => {
    deleteProduct(id)
    !update
      ? setUpdate(true)
      : setUpdate(false)
  }

  // Eliminar todos los productos del carrito

  const deleteCart = () => {
    clearCart()
    !update
      ? setUpdate(true)
      : setUpdate(false)
  }

  // Validación de datos ingresados en el formulario

  const confirm = (event) => {
    event.preventDefault()
    if (!users.name || !users.phone || !users.email) {
      Toastify({
        text: ('Complete todos los campos'),
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
      createOrder()
      deleteCart()
    }
  }

  // Réplica el estado, reemplazo del valor del input y sincronización de estado

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    const newValues = {
      ...users,
      [name]: value,
    }
    setUsers(newValues)
  }

  return (

    <div>
      <h1 className="cartTitulo">Cart</h1>
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
            <h2 className="cartTitulo">No hay productos en tu carrito</h2>
            <Link to={'/'}>
              <button className="cartTitulo verMas">Volver al inicio</button>
            </Link>
          </div>
        )
        :
        <div>
          <h2 className="cartTitulo">Total: ${total}</h2>
          <button className="cartBoton eliminarCart" onClick={deleteCart}>Elminar Cart</button>
          <div>
            <h2 className="cartTitulo">Finalizar compra</h2>
          </div>
          <form className="contFormulario" onSubmit={confirm}>
            <section>
              <div>
                <input
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Ingrese su nombre"
                  value={users.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  id="phone"
                  name="phone"
                  className="input"
                  placeholder="Ingrese su teléfono"
                  value={users.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input id="email"
                  name="email"
                  className="input"
                  placeholder="Ingrese su e-mail"
                  value={users.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="cartBoton confirmarCompra"
                  type="submit">
                  Confirmar compra
                </button>
              </div>
            </section>
          </form>
        </div>
      }
    </div>
  )
}

export default Cart
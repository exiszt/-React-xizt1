import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from "moment/moment"
import './style.css'
// import Formulario from "../Formulario"

const Cart = () => {
  const [order, setOrder] = useState({
    buyer: {
      name: 'Juan',
      phone: '123456789',
      email: 'test@test.com'
    },
    items: [],
    total: 0,
    date: '',
  })
  const { cart, clearCart, deleteProduct } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [update, setUpdate] = useState(false)
  const db = getFirestore()

  const createOrder = () => {
    setOrder((currentOrder) => {
      return {
        currentOrder,
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
      }
    })
    // Búsqueda de la colección "orders" en database
    const query = collection(db, 'orders')
    addDoc(query, order)
      .then(({ id }) => {
        console.log(id)
        // updateStockProducts(cart)
        alert('Felicidades por tu compra')
      })
      .catch(() => alert('Tu compra no pudo completarse'))
  }

  // const updateStockProducts = () =>{
  //   const idOrder = '4ffQh77irMfpd9teAxDS'
  //   const order = {
  //     buyer: {
  //       name: 'Juan',
  //       phone: '123456789',
  //       email: 'test@test.com'
  //     },
  //     items: cart.pop(),
  //     total: cart.reduce((valorPasado, valorActual) =>
  //       valorPasado + valorActual.price * valorActual.quantity,
  //       0
  //     ),
  //     date: moment().format()
  //   }
  //   const queryUpdate = doc(db, 'orders', idOrder)
  //   updateDoc(queryUpdate, order)
  //   .then((response)=>{console.log(response)})
  //   .catch((error) => {console.log(error)})
  // }

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
          {/* <Link to={'/formulario'}> */}
          <button onClick={createOrder} className="cartBoton confirmarCompra">
            Confirmar compra
          </button>
          {/* </Link> */}
        </div>
      }
    </div>
  )
}

export default Cart
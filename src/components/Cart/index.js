import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './style.css'
// import Formulario from "../Formulario"

const Cart = () => {

    const { cart, clearCart, deleteProduct, totalPrice } = useContext(CartContext)
    console.log(cart)

    return (
        <div>
            <h2 className="cartTitulo">Productos en el carrito</h2>

            {cart.map((product) => (
                <section key={product.id} className="cartSubTitles">
                    <div className="cartMiniatura">
                        <img src={product.imagen} className="cartMiniaturaImg" />
                        <h2 className="cartMiniaturaTitulo">{product.titulo}</h2>
                    </div>
                    <span className="cartDatosCompra">${product.precio} x {product.quantity} unidad/es</span>
                    <span className="cartDatosCompra cartSubtotal">${product.precio * product.quantity}</span>
                    <button className="cartBoton eliminarProducto" onClick={() =>
                        deleteProduct(product.id)}>
                        Quitar producto
                    </button>
                </section>
            ))}
                <section>
                    <h2 className="cartTitulo">Total: ${totalPrice()}</h2>
                    <button onClick={clearCart} className="cartBoton eliminarCart">Eliminar cart</button>
                    <Link to={'/formulario'}>
                        <button className="cartBoton confirmarCompra">
                            Confirmar compra
                        </button>
                    </Link>
                </section>
        </div>
    )
}

export default Cart
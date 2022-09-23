import './style.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantityWidget } = useContext(CartContext)

    return (

        <div className="contenedorGeneral">
            <div className="contenedorCarrito">
                <img className="carrito" src={require('./carrito.png')} />
                <span className="contadorCarrito">{totalQuantityWidget()}</span>
            </div>
        </div>
    )
}

export default CartWidget
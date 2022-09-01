import './style.css'

const CartWidget = () => {
    return (
        <div className="contenedor-general">
            <div className="contenedor-carrito">
                <img className="carrito" src={require('./carrito.png')} />
            </div>
        </div>
    )
}

export default CartWidget
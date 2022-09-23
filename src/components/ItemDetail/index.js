import ItemCount from '../ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './style.css'

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0)
    const [count, setCount] = useState(1)
    const {addToCart} = useContext(CartContext)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        addToCart({...item, quantity: quantity})
        console.log(quantity + " unidad/es de " + item.titulo + " añadida/s al carrito")
    }

    return (
        <div className="contGeneral">
            <div className="cardClick">
                <img src={item.imagen} className="imagenClick" alt={item.descripcion} />
            </div>
            <div className="contDetalleClick">
                <h2>{item.titulo}</h2>
                <p className="precio"> {"$" + item.precio} </p>
                <p className="descripcion"> {item.descripcion} </p>

                {quantity === 0 ? (
                    <ItemCount initial={1} onAdd={onAdd} stock={item.stock} setCount={setCount} count={count} className="contador" />
                ) : (
                    <div>
                        <p className="productoAgregado">{count} producto/s añadido/s al carrito</p>
                        <Link to="/">
                            <button className="botonInicioCart">
                                Volver al inicio
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button className="botonInicioCart">
                                Ir al Cart
                            </button>
                        </Link> 
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemDetail
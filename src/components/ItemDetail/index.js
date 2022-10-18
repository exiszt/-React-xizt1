import ItemCount from "../ItemCount"
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./style.css"

const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(false)
    const [show, setShow] = useState(false)
    const { addQuantity } = useContext(CartContext)

    useEffect(() => {
        setTimeout(() => {
            count != 0 && addQuantity(producto, count, (producto.stock - count))
        }, 1000)
    }, [load])

    const onAdd = (quantity) => {
        setCount(quantity)
        setShow(true)
        load
        ? setLoad(false)
        : setLoad(true)
    }

    return (
        <div className="contGeneral">
            <div className="cardClick">
                <img src={producto.image} className="imagenClick" alt={producto.title} />
                <div className="contDetalleClick">
                    <h2>{producto.title}</h2>
                    <p className="precioDetalle"> {"$" + producto.price} </p>
                    <p className="descripcion"> {producto.description} </p>
                    {!show && <ItemCount stock={producto.stock - count} onAdd={onAdd} className="contador" />}
                    {show && <div>
                        <Link to={'/'}>
                            <button className="botonDetalle">
                                Volver al inicio
                            </button>
                        </Link>
                        <button onClick={() => { setShow(false) }} className="botonDetalle">Agregar más</button>
                        <Link to={'/cart'}>
                            <button className="botonDetalle">
                                Ir al Cart
                            </button>
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
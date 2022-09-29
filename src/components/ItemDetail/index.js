import ItemCount from "../ItemCount"
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import './style.css'

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
                <img src={producto.imagen} className="imagenClick" alt={producto.titulo} />
                <div className="contDetalleClick">
                    <h2>{producto.titulo}</h2>
                    <p className="precio"> {"$" + producto.precio} </p>
                    <p className="descripcion"> {producto.descripcion} </p>
                    {!show && <ItemCount stock={producto.stock - count} onAdd={onAdd} className="contador" />}
                    {show && <div>
                        <Link to={'/'}>
                            <button className="botonInicioCart">
                                Volver al inicio
                            </button>
                        </Link>
                        <Link to={'/cart'}>
                            <button className="botonInicioCart">
                                Ir al Cart
                            </button>
                        </Link>
                        <button onClick={() => { setShow(false) }} className="botonInicioCart">Agregar más</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
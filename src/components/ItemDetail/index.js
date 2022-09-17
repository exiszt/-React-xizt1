import ItemCount from '../ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0)
    const [count, setCount] = useState(1)

    const onAdd = (count) => {
        setCantidad(count)
        console.log(count + ' producto/s añadido/s al carrito')
    }

    return (
        <div className="contGeneral">
            <div className='cardClick'>
                <img src={item.imagen} className='imagenClick' alt={item.descripcion} />
            </div>
            <div className='contDetalleClick'>
                <h2>{item.titulo}</h2>
                <p className="precio"> {"$" + item.precio} </p>
                <p className="descripcion"> {item.descripcion} </p>

                {cantidad === 0 ? (
                    <ItemCount initial={1} onAdd={onAdd} stock={item.stock} setCount={setCount} count={count} className="contador" />
                ) : (
                    <div>
                        <p className="productoAgregado">{count} producto/s añadido/s al carrito</p>
                        <Link to="/cart">
                            <button className="agregar">
                                Confirmar compra
                            </button>
                        </Link>
                        <Link to="/">
                            <p className='inicio'>Volver al inicio</p>
                        </Link>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemDetail
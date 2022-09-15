import { useState } from "react"
import './style.css'

const ItemCount = ({ stock }) => {
    const [items, setItems] = useState(1)

    const sumar = () => items < stock ? setItems(items + 1) : alert('Límite de unidades.')
    const restar = () => items > 0 ? setItems(items - 1) : alert('Límite negativo.')

    return (
        <div>
            <div className="contador">
                <span><button className="restarSumar" onClick={restar}>-</button></span>
                <div>
                    <p>{items}</p>
                </div>
                <span><button className="restarSumar" onClick={sumar}>+</button></span>
            </div>
            <div>
                <p className="unidades">{stock} unidades</p>
            </div>
        </div>
    )
}

export default ItemCount
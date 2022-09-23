import './style.css'

const ItemCount = ({ count, setCount, stock, onAdd }) => {
    const sumar = () => count < stock && setCount(count + 1)
    const restar = () => count > 0 && setCount(count - 1)

    return (
        <div>
            <div>
                <p className="unidades">{stock} unidades</p>
            </div>
            <div className="contador">
                <span><button className="restarSumar" onClick={restar}>-</button></span>
                <div>
                    <p>{count}</p>
                </div>
                <span><button className="restarSumar" onClick={sumar}>+</button></span>
            </div>
            <button
                className="botonInicioCart"
                onClick={() => onAdd(count)}
                disabled={count <= 0}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
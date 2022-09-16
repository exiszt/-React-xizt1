import ItemCount from '../ItemCount'
import './style.css'

const onAdd = (count) => {
    console.log('To Do add ' + count + ' items to cart')
}

const ItemDetail = ({ item }) => {
    return (
        <div className="contGeneral">
            <div className='cardClick'>
                <img src={item.imagen} className='imagenClick' alt={item.descripcion} />
            </div>
            <div className='contDetalleClick'>
                <h2>{item.titulo}</h2>
                <p className="precio"> {"$" + item.precio} </p>
                <p className="descripcion"> {item.descripcion} </p>
                <ItemCount initial={1} onAdd={onAdd} stock={item.stock} className="contador" />
                <button className="comprar">Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail
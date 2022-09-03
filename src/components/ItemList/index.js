import Item from "../Item"
import './style.css'

const ItemList = ({ lista }) => {
    return (
        <div className="Item-Caja">
            {lista.map((product) => (
                <Item
                    key={product.id}
                    titulo={product.titulo}
                    precio={product.precio}
                    imagen={product.imagen}
                />
            ))}
        </div>
    )
}

export default ItemList
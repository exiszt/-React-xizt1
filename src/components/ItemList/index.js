import Item from "../Item"

const ItemList = ({ items }) => {
    return (
        items.map((product) => (
            <Item
                key={product.id}
                id={product.id}
                titulo={product.titulo}
                categoria={product.categoria}
                precio={product.precio}
                imagen={product.imagen}
            />
        ))
    )
}

export default ItemList
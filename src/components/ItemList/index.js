import Item from "../Item"

const ItemList = ({ items }) => {
    return (
        items.map((product) => (
            <Item
                key={product.id}
                id={product.id}
                title={product.title}
                categoria={product.categoria}
                price={product.price}
                image={product.image}
            />
        ))
    )
}

export default ItemList
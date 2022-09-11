import Detail from "../Detail"

const ItemDetail = ({ lista }) => {
    return (
        <>
            {lista.slice(0, 1).map((product) => (
                <Detail
                    key={product.id}
                    titulo={product.titulo}
                    precio={product.precio}
                    descripcion={product.descripcion}
                    imagen={product.imagen}
                    vendidos={product.vendidos}
                />
            ))}
        </>
    )
}

export default ItemDetail
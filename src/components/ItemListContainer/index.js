import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../mockData"
import ItemList from "../ItemList"
import Loader from "../Loader"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                const filterProducts = products.filter(
                    (product) => product.categoria === categoryName
                )
                setTimeout(() => res(categoryName ? filterProducts : products), 1000)
            })

        setLoading(true)

        getProducts()
            .then(data => setItems(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryName])

    return (
        <>
            {loading
                ? <Loader />
                : (<section className="contCards">
                    <ItemList items={items} />
                </section>)
            }
        </>
    )
}

export default ItemListContainer
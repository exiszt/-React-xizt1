import products from "../mockData"
import ItemDetail from "../../components/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader"
import './style.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { idProd } = useParams()
    const idProdNumber = Number(idProd)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const filterProducts = products.find(
                    (product) => product.id === idProdNumber
                )
                setTimeout(() => res(idProdNumber ? filterProducts : null), 1000)
            })

        getProduct()
            .then(data => setItem(data))
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    }, [idProdNumber])

    return (
        <>
            {loading 
            ? <Loader/>
            : <section className="contCards">
                <ItemDetail item={item} />
              </section>
            }
        </>
    )
}

export default ItemDetailContainer
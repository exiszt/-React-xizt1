import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"
import Loader from "../Loader"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const { categoryName } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts()
  }, [categoryName])

  // Obtener lista de productos y filtrar productos por categoría
  
  const getProducts = () => {
    const db = getFirestore()
    const queryBase = collection(db, 'items')
    const querySnapshot = categoryName
    ? query(queryBase, where("category", "==", categoryName))
    : queryBase

      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          setProductList(data)
          setLoading(true)
        }).catch((err) => console.log(err))
  }

  return (
    <section className="contCards">
      {loading === false
      ? <Loader />
      : <ItemList items={productList} />
      }
      </section>
  )
}

export default ItemListContainer
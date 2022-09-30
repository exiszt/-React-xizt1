import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import data from "../mockdata"
import ItemList from "../ItemList"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
    getProducts()
  }, [categoryName])

  const getProducts = () => {
    const db = getFirestore()
    const querySnapshot = collection(db, 'items')
    if (categoryName) {
      const queryFilter = query(querySnapshot, where("category", "==", categoryName))
      getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          setProductList(data)
        }).catch((err) => console.log(err))
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          setProductList(data)
        }).catch((err) => console.log(err))
    }


  }

  return (
    <section className="contCards">
      <ItemList items={productList} />
    </section>
  )
}

export default ItemListContainer
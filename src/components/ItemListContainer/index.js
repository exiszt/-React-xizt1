import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from "../mockdata"
import ItemList from "../ItemList"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
    getProducts
      .then((response) => { filter(response) })
  }, [categoryName])

  const filter = (response) => {
    if (categoryName) {
      setProductList(response.filter((item) => item.categoria == categoryName))

    } else {
      setProductList(data)
    }
  }

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })

  return (
    <section className="contCards">
      <ItemList items={productList} />
    </section>
  )
}

export default ItemListContainer
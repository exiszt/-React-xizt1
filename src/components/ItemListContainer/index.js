import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../mockData"
import ItemList from "../ItemList"

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
      const getProducts  = () => 
          new Promise((res, rej) => {
              const filterProducts = products.filter(
                  (product) => product.categoria === categoryName
              )
              setTimeout(() => res(categoryName ? filterProducts : products), 500)
          })
      
      getProducts()
          .then(data => setItems(data))
          .catch(error => console.log(error))
  }, [categoryName])
  
  return (
      <>
              <section className='contCards'>
                  <ItemList items={ items } />
              </section>
      </>
  )
}

export default ItemListContainer
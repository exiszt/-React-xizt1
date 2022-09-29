import data from "../mockdata"
import ItemDetail from "../ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './style.css'

const ItemDetailContainer = () => {
  const [producto, setPoducto] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getItem
    .then((response)=> {setPoducto(response.find(prod => prod.id === id))

  })
    .catch((error)=>console.log(error))
  }, [id])

const getItem = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(data)}, 1000)
  })

  return (
    <>
      <section className="contCards">
      {producto && <ItemDetail producto={producto}/>}
      </section>
    </>
  )
}

export default ItemDetailContainer
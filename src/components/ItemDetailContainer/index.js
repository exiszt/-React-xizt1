import ItemDetail from "../ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import Loader from "../Loader"
import "./style.css"

const ItemDetailContainer = () => {
  const [producto, setPoducto] = useState({})
  const { id } = useParams()
  const db = getFirestore()
  const [loading, setLoading] = useState(false)

  const getItem = () => {
    const queryDoc = doc(db, 'items', id)
      getDoc(queryDoc)
        .then((response) => {
        setPoducto({id: response.id, ...response.data()})
        setLoading(true)
        })
    }

  useEffect(() => {
    getItem()
  }, [id])

  return (
    <>
      <section className="contCards">
        {producto && loading === false
        ? <Loader/>
        : <ItemDetail producto={producto} />}
      </section>
    </>
  )
}

export default ItemDetailContainer
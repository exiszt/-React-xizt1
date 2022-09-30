// import data from "../mockdata"
import ItemDetail from "../ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import './style.css'

const ItemDetailContainer = () => {
  const [producto, setPoducto] = useState({})
  const { id } = useParams()
  const db = getFirestore()

  const getItem = () => {
    const queryDoc = doc(db, 'items', id)
      getDoc(queryDoc)
        .then((response) => {
        setPoducto({id: response.id, ...response.data()})
        })
    }

  useEffect(() => {
    getItem()
  }, [id])

  return (
    <>
      <section className="contCards">
        {producto && <ItemDetail producto={producto} />}
      </section>
    </>
  )
}

export default ItemDetailContainer
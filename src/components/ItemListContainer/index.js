import Boton from "../Boton"
import data from "../mockdata"
import { useEffect, useState } from "react"
import ItemList from "../ItemList"

const ItemListContainer = () =>{

    const [productList, setProductList] = useState ([])

    useEffect(() =>{
        getProducts.then((response) =>{
            setProductList(response)
        })
    }, [])

    const getProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    
    const funcionClick = () =>{
        alert('Saludos cordiales.')
    }

    return (
        <div className="contenedor-ilc">
            <Boton funcion={funcionClick}/>
            <ItemList lista={productList}/>
        </div>
    )
}

export default ItemListContainer
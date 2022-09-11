import data from "../mockdata"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"

const ItemDetailContainer = () =>{

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

    return (
        <div className="contenedor-ilc">
            <ItemDetail lista={productList}/>
        </div>
    )
}

export default ItemDetailContainer
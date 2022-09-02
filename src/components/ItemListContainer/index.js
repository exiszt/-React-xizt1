import Boton from "../Boton"
import ItemCount from "../ItemCount"

const ItemListContainer = () =>{

    const funcionClick = () =>{
        alert('Saludos cordiales.')
    }

    const stock = 10

    return (
        <div className="contenedor-ilc">
            <Boton funcion={funcionClick}/>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemListContainer
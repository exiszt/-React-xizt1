import Boton from "../Boton"

const ItemListContainer = () =>{

    const funcionClick = () =>{
        alert('Saludos cordiales.')
    }

    return (
        <div className="contenedor-ilc">
            <Boton funcion={funcionClick}/>
        </div>
    )
}

export default ItemListContainer
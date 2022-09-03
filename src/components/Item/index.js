import ItemCount from '../ItemCount'
import './style.css'


const Item = ({titulo, precio, imagen}) =>{

    const stock = 10

    return(
        <div className="Items">
            <p>{titulo}</p>
            <img width="250" height="250" src={imagen} alt={titulo}/>
            <h5>${precio}</h5>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default Item
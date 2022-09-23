import { Link } from 'react-router-dom'
import './style.css'

const Item = ({item}) =>{

    return (
        <div className="card">
            <div className="contenido">
            <img src={item.imagen} alt={item.descripcion} /> 
                <h2 className="titulo">{item.titulo}</h2>
                <p>{"$" + item.precio}</p>
                <Link to={`/item/${item.id}`}>
                    <button className="verMas">Ver más</button>
                </Link>
            </div>
        </div>
    )
}

export default Item
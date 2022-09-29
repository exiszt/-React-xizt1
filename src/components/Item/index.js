import { Link } from 'react-router-dom'
import './style.css'

const Item = ({ id, titulo, precio, imagen }) => {

  return (
    <div className="card">
      <div className="contenido">
        <img src={imagen} alt={titulo} />
        <h2 className="titulo">{titulo}</h2>
          <p>{"$" + precio}</p>
          <Link to={`/item/${id}`}>
            <button className="verMas">Ver más</button>
          </Link>
      </div>
    </div>
  )
}

export default Item
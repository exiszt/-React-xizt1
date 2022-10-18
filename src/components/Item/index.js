import { Link } from "react-router-dom"
import "./style.css"

const Item = ({ id, title, price, image }) => {

  return (
    <div className="card">
      <div className="contenido">
        <img src={image} alt={title} />
        <h2 className="tituloItem">{title}</h2>
        <p className="precioItem">{"$" + price}</p>
        <Link to={`/item/${id}`}>
          <button className="verMas">Ver más</button>
        </Link>
      </div>
    </div>
  )
}

export default Item
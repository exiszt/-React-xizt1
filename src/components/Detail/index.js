import ItemCount from '../ItemCount'
import './style.css'

const Detail = ({ titulo, precio, imagen, descripcion, vendidos }) => {

    const stock = 10
    const cuotas = 3
    const calcularCuotas = () => precio / cuotas
    

    return (
        <div className='DetailDiv'>
            <div className="Detail">
                <div className="ImagenDiv">
                    <img src={imagen} alt={titulo} />
                </div>
                <div className="DetailProducto">
                    <p className='Titulo'>{titulo}</p>
                    <p className="Vendidos">{vendidos} vendidos</p>
                    <p>{descripcion}</p>
                    <h5>${precio}</h5>
                    <h6><span className='EnCuotas'>o en {cuotas} cuotas sin interés de</span> ${calcularCuotas()}</h6>
                    <ItemCount stock={stock} />
                    <button className="Comprar">Comprar</button>
                </div>

            </div>
        </div>
    )
}

export default Detail
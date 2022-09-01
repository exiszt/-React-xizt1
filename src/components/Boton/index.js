import './style.css'

const Boton = ({funcion}) => {
    return (
        <button className="boton-saludo" onClick={funcion}>
            Saludo
        </button>
    )
}

export default Boton
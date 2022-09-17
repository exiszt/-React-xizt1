import { useState } from "react"

const Formulario = () => {
    const [datosFormulario, setDatosFormulario] = useState({ nombre: '', apellido: '', correo: '' })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(datosFormulario)
    }

    const handleChange = (event) => {
        setDatosFormulario({ ...datosFormulario, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={datosFormulario.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    value={datosFormulario.apellido}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    name="correo"
                    value={datosFormulario.correo}
                    onChange={handleChange}
                />
                <button>Enviar</button>
                <p>Cart en desarrollo.</p>
            </form>
        </div>
    )
}

export default Formulario
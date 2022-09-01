import logo from '../../xizt.svg'
import CartWidget from '../CartWidget'

const NavBar = () => {
    return (
        <div className="Navbar-Contenedor">
            <img src={logo} className="App-logo-nav" alt="logo" />
            <div className="Links">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sección 1</a></li>
                    <li><a href="#">Sección 2</a></li>
                    <li><a href="#">Sección 3</a></li>
                </ul>
            </div>
            <div className="Caja-Boton">
                <button className="Boton">Ingresa</button>
            </div>
                <CartWidget />
        </div>
    )
}

export default NavBar
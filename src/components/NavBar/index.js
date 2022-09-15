import logo from '../../xizt.svg'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="Navbar-Contenedor">
            <NavLink to={'/'}>
                <img src={logo} className="App-logo-nav" alt="logo" />
            </NavLink>
            <div className="NavLinks">
                <ul>
                    <li>
                        <NavLink
                        to={'/'}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={'/categoria/biblias'}
                        >
                            Biblias (estándar)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/categoria/bibliasdeestudio'}
                        >
                            Biblias (estudio)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to={'/categoria/libros'}
                        >
                            Libros
                        </NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar
import logo from "./xizt.svg"
import CartWidget from "../CartWidget"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const NavBar = (props) => {
    const { cart } = useContext(CartContext)

    return (
        <div className="navBarContenedor">
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
                            to={`/categoria/biblias`}
                        >
                            Biblias (estándar)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/categoria/bibliasdeestudio`}
                        >
                            Biblias (estudio)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/categoria/libros`}
                        >
                            Libros
                        </NavLink>
                    </li>
                </ul>
            </div>
            <NavLink to={`/cart`}>
                <CartWidget />
            </NavLink>
        </div>
    )
}

export default NavBar
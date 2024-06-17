import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/loguito.png";


export const NavBar = () => {
  
    
  
    return (
    <>
        <div className="navbar">
            <Link className="logo" to='/'>
                <img src={logo} alt="loguito" className="logo" />
            </Link>
            <div className="links">
                <NavLink className="link"  
                to="/inicio"
                >Inicio</NavLink>

                <NavLink className="link"  
                to="/us"
                >Nosotros</NavLink>

                <NavLink className="link"  
                to="/cursos"
                >Cursos</NavLink>
                
                <NavLink className="link"  
                to="/contacto"
                >Contacto </NavLink>
            </div>
        </div>
    </>
  )
}


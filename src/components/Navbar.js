import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo-sophie.png"
import Style from "./Navbar.css"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth" >
        <NavLink className="navbar-brand" to="########"><img src={Logo} width="150" alt="SophieClothes"/> </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="#"> <span class="sr-only"></span>Log In / Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">Agregar Stock</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
        </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="#">Tops</NavLink>
                <NavLink className="dropdown-item" to="#">Faldas</NavLink>
                <NavLink className="dropdown-item" to="#">Pantalones</NavLink>
                <NavLink className="dropdown-item" to="#">Abrigos</NavLink>
                <NavLink className="dropdown-item" to="#">Zapatos</NavLink>
              </div>
              
              {/* <div className="login">
                <NavLink className="nav-link my-2 my-lg-0" to="#">Log In / Sign Up</NavLink>
              </div> */}
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

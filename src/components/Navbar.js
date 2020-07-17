import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo-sophie.png"
import Style from "./Navbar.css"

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth" >
        <NavLink className="navbar-brand" to="/"><img src={Logo} width="150" alt="SophieClothes" /> </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">Agregar Stock</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

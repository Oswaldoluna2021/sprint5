import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

function Navbar(){
    return(
        <nav className="p-3 bg-dark text-white navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand">
                <img height="50" width="50" src={logo} alt="Logo react js"/>&nbsp;&nbsp;
                <strong>Home</strong>
            </Link>
            <Link to="/PagoAdmin" className="btn btn-warning mr-3">
                Pagos
            </Link>

            <Link to="#" className="btn btn-warning mr-3">
                Perfiles
            </Link>

            <Link to="#" className="btn btn-warning">
                Usuarios
            </Link>
        </nav>
    )
}
export default Navbar
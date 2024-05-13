import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className="logo"> 
        <Link to="/"><img src={logo} alt="logo" /> </Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Clientes</Link></li>
                <li><Link to="/reservas">Reservas</Link></li>
            </ul>
        </nav>
    </header>
  )
}

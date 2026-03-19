import React from 'react'
import "../Styles/InicioPagina.css"

import { useNavigate } from 'react-router-dom'
function InicioPagina() {
 const navigate = useNavigate()
 const irsesion = () => {
    navigate("/Iniciar")
  }
  const ircuenta = () => {
    navigate("Registro")
  }
  return (
    <div>

<nav className='navbar'>
    <h3>logo</h3>
        <ul className='nav-links'>
            <li onClick={irsesion}>Iniciar sesión</li>
            <li onClick={ircuenta}>Crear cuenta </li>
        </ul>
    
</nav>







    </div>
  )
}

export default InicioPagina
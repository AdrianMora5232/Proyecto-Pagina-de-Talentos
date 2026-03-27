import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/NavBar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/principal', label: 'Inicio', icon: '🏠' },
    { to: '/portafolio', label: 'Proyectos', icon: '📁' },
    { to: '/pagina-contacto', label: 'Contactos', icon: '✉️' },
    { to: '/sobre-nosotros', label: 'Sobre Nosotros', icon: '👥' },
    { to: '/Funcionalidad', label: 'Cómo Funciona', icon: '⚙️' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/principal" className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Talentos</span>
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="navbar-item">
              <Link
                to={link.to}
                className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
                title={`Ir a ${link.label}`}
                aria-label={link.label}
              >
                <span className="link-icon">{link.icon}</span>
                <span className="link-text">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

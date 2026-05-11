import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/NavBar.css'
import Fetch from '../../services/Fetch'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/principal', label: 'Inicio' },
    { to: '/todos-proyectos', label: 'Proyectos' },
    { to: '/pagina-contacto', label: 'Contactos' },
    { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { to: '/Funcionalidad', label: 'Cómo Funciona' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Izquierda: Logo */}
        <div className="navbar-left">
          <Link to="/principal" className="navbar-logo">
            <div className="logo-icon-wrapper">
              <span className="logo-icon">✦</span>
            </div>
            <span className="logo-text">Talentos</span>
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        {/* Centro: Links de Navegación */}
        <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.to} className="navbar-item">
                <Link
                  to={link.to}
                  className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Derecha: Búsqueda y Botones/Avatar */}
        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" className="search-input" placeholder="Buscar..." />
          </div>
          <Link to="/perfil-usuario" onClick={() => setMenuOpen(false)} className="profile-btn" title="Perfil de Usuario">
            <div className="avatar-circle">
              <span className="avatar-icon">👤</span>
            </div>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

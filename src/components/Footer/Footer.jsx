import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          Krea
        </div>
        
        {/*<nav className="footer-links">
          <Link to="/privacidad" className="footer-link">Privacidad</Link>
          <Link to="/terminos" className="footer-link">Términos</Link>
          <Link to="/cookies" className="footer-link">Cookies</Link>
          <Link to="/contacto" className="footer-link">Contacto</Link>
        </nav>*/}
        
        <div className="footer-copy">
          © 2026 Krea. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
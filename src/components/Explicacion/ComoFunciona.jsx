import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Explicacion/ComoFunciona.css';

function ComoFunciona() {
  const navigate = useNavigate();

  return (
    <div className="como-funciona-container" style={{ position: 'relative' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ position: 'absolute', top: '25px', left: '25px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', boxShadow: '0 4px 6px rgba(0, 123, 255, 0.2)', zIndex: 10 }}
      >
        &lsaquo; Volver
      </button>
      
      <h2 className="como-funciona-title">🚀 ¿Cómo crear tu perfil y portafolio?</h2>

      <div className="como-funciona-steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">👤</span> Creá tu cuenta</h3>
            <p className="step-description">
              Registrate en la plataforma creando una cuenta personal. Este paso te permitirá acceder a todas las funciones y comenzar a construir tu perfil profesional.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">🔑</span> Iniciá sesión</h3>
            <p className="step-description">
              Ingresá con tu cuenta para explorar perfiles, proyectos y oportunidades dentro de la plataforma.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">👀</span> Accedé a tu perfil</h3>
            <p className="step-description">
              Desde el botón <strong>Perfil</strong>, podrás visualizar tu espacio personal, donde se mostrará tu información, habilidades y progreso.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">💼</span> Creá tu portafolio</h3>
            <p className="step-description">Armá tu propio portafolio profesional:</p>
            <ul className="step-list">
              <li>Agregá tus habilidades</li>
              <li>Describí tu experiencia</li>
              <li>Personalizá tu perfil para que refleje quién sos y qué hacés</li>
            </ul>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">📈</span> Aprendé a mejorar tu perfil</h3>
            <p className="step-description">En la sección <strong>¿Cómo funciona?</strong> te brindamos:</p>
            <ul className="step-list">
              <li>Consejos prácticos</li>
              <li>Recomendaciones profesionales</li>
              <li>Guías para destacar tu talento y generar más oportunidades</li>
            </ul>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">📁</span> Subí tus proyectos</h3>
            <p className="step-description">
              Publicá tus trabajos para que la comunidad pueda conocer tu talento. Podés subir proyectos creativos, técnicos o profesionales según tu área.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">7</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">⭐</span> Recibí calificaciones</h3>
            <p className="step-description">Otros usuarios podrán:</p>
            <ul className="step-list">
              <li>Ver tus proyectos</li>
              <li>Calificarlos con estrellas</li>
            </ul>
            <p className="step-description" style={{ marginTop: '1rem', fontStyle: 'italic', fontWeight: 600, color: '#007bff' }}>
              Cuantas mejores valoraciones recibas, mayor visibilidad tendrán tus proyectos frente a empresas y personas.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">8</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">🏆</span> Convertite en talento destacado</h3>
            <p className="step-description">
              Si tus proyectos reciben excelentes calificaciones, tendrás la oportunidad de aparecer como <strong>Talento Destacado del Mes</strong>, aumentando aún más tu exposición.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">9</div>
          <div className="step-content">
            <h3 className="step-title"><span className="icon-container">🤝</span> Conectá con empresas</h3>
            <p className="step-description">
              Las empresas interesadas en tus habilidades podrán contactarte directamente para propuestas, colaboraciones o proyectos.
            </p>
          </div>
        </div>
      </div>

      <div className="como-funciona-footer">
        <div className="footer-content">
          <div className="footer-highlight">✨ Tu talento no solo se muestra, se impulsa.</div>
          <div className="footer-text">
            La plataforma está pensada para acompañarte desde tus primeros pasos hasta nuevas oportunidades profesionales.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
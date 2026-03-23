import React from 'react'
import '../styles/InicioPagina.css'

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
      {/* Div de navegacion de la pagina principal */}
      <div className='DivNavbar'>
        <nav className='navbar'>
          <img src="" alt="Logo" />
          <h3>Krea</h3>
          <ul className='nav-links'>
            <li className='BotonIniciar' onClick={irsesion}>Iniciar sesión</li>
            <li className='BotonCrear' onClick={ircuenta}>Crear cuenta </li>
          </ul>
        </nav>
      </div>
      <br />
      <br />
      <br />
      <button className='BotonPerfil' onClick={ircuenta}><strong>Crea tu perfil profecional</strong></button>
      <br />
      {/* Div de presentacion de la pagina */}
      <div className='DivPresentacion'>
        <div className='Descripcion'>
          <h2> <strong>Muestra tu Talento</strong> </h2>
          <h3 className='Subtitulo'> <strong>A Todo el Mundo</strong></h3>
          <p>Nuestra página de talentos es una plataforma digital integral creada para centralizar, visibilizar y potenciar el talento profesional en un solo espacio.
            Funciona como un punto de encuentro entre personas con habilidades, conocimientos y experiencia, y empresas o clientes que buscan perfiles confiables y especializados.</p>
          <p>A través de la plataforma, cada talento puede crear un perfil profesional personalizado, mostrar su portafolio, destacar sus habilidades, experiencia y logros, y proyectar una imagen clara y competitiva en el entorno digital.
            Al mismo tiempo, las empresas y reclutadores pueden explorar, filtrar y contactar talentos de forma rápida y eficiente según sus necesidades.</p>
          <div className='DivImagen'>
            <img className='ImagenPrincipal' src="https://png.pngtree.com/background/20241027/original/pngtree-relaxing-painting-on-canvas-man-person-abstract-photo-picture-image_11047608.jpg" alt="" width={650} height={250} />
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* Div para descripcion*/}
      <div className='DivDescrip'>
        <h2 className='SubTituloDescrip'><strong>Impulsa tu talento</strong></h2>
        <h4 className='ParrafoDescrip'>Da el primer paso para destacar tu talento.
          Crea tu perfil en minutos, muestra lo que sabes hacer y conecta con personas que están buscando exactamente habilidades como las tuyas.
          Nuestra plataforma está diseñada para ayudarte a crecer, ganar visibilidad y convertir tu talento en nuevas oportunidades profesionales desde el primer día.</h4>
      </div>

       {/* Div de cartas */}
      <div className='FeaturesContainer'>
        <div className='FeatureCard'>
          <div className='FeatureIcon'>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>
          <h3 className='FeatureTitle'>Muestra tu trabajo</h3>
          <p className='FeatureText'>Exhibe tus proyectos con una calidad visual impresionante. Sube tu portafolio de talentos y demuestra tus habilidades al mundo.</p>
        </div>
        <div className='FeatureCard'>
          <div className='FeatureIcon'>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className='FeatureTitle'>Conecta con expertos</h3>
          <p className='FeatureText'>Entra en contacto directo con líderes de la industria y clientes potenciales que buscan talento como el tuyo.</p>
        </div>
        <div className='FeatureCard'>
          <div className='FeatureIcon'>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
          </div>
          <h3 className='FeatureTitle'>Portafolios Inteligentes</h3>
          <p className='FeatureText'>Crea una presencia online profesional de forma rápida con nuestro constructor intuitivo. Personalización total en clics.</p>
        </div>
      </div>




    </div>
  )
}

export default InicioPagina
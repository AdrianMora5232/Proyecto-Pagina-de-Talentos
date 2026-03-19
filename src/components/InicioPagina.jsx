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
      <button className='BotonPerfil'> <strong>Crea tu perfil profecional</strong></button>
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




    </div>
  )
}

export default InicioPagina
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Explicacion/Consejos.css';

function Consejos() {
  const navigate = useNavigate();
  const tips = [
    {
      id: 1,
      title: "Mostrá lo que sabés hacer desde el primer vistazo",
      content: "Usá una foto profesional o una imagen que represente tu trabajo. Tu título debe ser claro: qué hacés y para quién. Ejemplo: Diseñador gráfico especializado en marcas digitales.",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Describite con intención, no solo con datos",
      content: "Contá qué problema resolvés. Usá un tono cercano y profesional. Evitá textos muy largos.",
      icon: "📝"
    },
    {
      id: 3,
      title: "Tu portafolio es clave",
      content: "Subí pocos trabajos, pero bien seleccionados. Explicá brevemente cada proyecto: objetivo, proceso y resultado. Mostrá variedad si tenés más de una habilidad.",
      icon: "💼"
    },
    {
      id: 4,
      title: "Destacá tus habilidades reales",
      content: "Elegí solo las habilidades que dominás. Ordenalas de la más fuerte a la más relevante. Evitá listas exageradas.",
      icon: "⭐"
    },
    {
      id: 5,
      title: "Demostrá experiencia, aunque estés empezando",
      content: "Proyectos personales, prácticas o colaboraciones sí cuentan. Mostrá compromiso y constancia.",
      icon: "🚀"
    },
    {
      id: 6,
      title: "Generá confianza",
      content: "Completá todo tu perfil. Agregá enlaces externos (redes, web, Behance, GitHub, etc.). Si hay valoraciones o testimonios, destacalos.",
      icon: "🤝"
    },
    {
      id: 7,
      title: "Mantené tu perfil activo",
      content: "Actualizá tu portafolio con nuevos trabajos. Respondé mensajes con rapidez. Ajustá tu perfil según el tipo de proyectos que buscás.",
      icon: "⚡"
    },
    {
      id: 8,
      title: "Mostrá tu personalidad profesional",
      content: "Contá qué te inspira o qué te diferencia. Sin exagerar, pero sin ser genérico.",
      icon: "🌟"
    },
    {
      id: 9,
      title: "Usá un llamado a la acción",
      content: "Cerrá tu descripción con algo claro: 'Disponible para nuevos proyectos' o 'Escribime y conversemos tu idea'.",
      icon: "📢"
    },
    {
      id: 10,
      title: "Pensá como cliente",
      content: "Preguntate: ¿Entiendo rápido qué hace esta persona? ¿Me genera confianza? ¿Me dan ganas de contactarla?",
      icon: "💡"
    }
  ];

  return (
    <div className="consejos-page-wrapper">
      <div className="consejos-container">
        <button onClick={() => navigate(-1)} className="consejos-back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Volver
        </button>
        <div className="consejos-header">
          <span className="consejos-badge">Información Útil</span>
          <h1 className="consejos-title">Consejos para que tu perfil destaque</h1>
          <p className="consejos-subtitle">Sigue estas recomendaciones para aumentar tus posibilidades de éxito en la plataforma y atraer mejores oportunidades.</p>
        </div>
        
        <div className="consejos-grid">
          {tips.map((tip) => (
            <div key={tip.id} className="consejo-card">
              <div className="consejo-icon-wrapper">
                <span className="consejo-icon">{tip.icon}</span>
              </div>
              <h3 className="consejo-card-title">
                <span className="consejo-number">{tip.id}.</span> {tip.title}
              </h3>
              <p className="consejo-card-text">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Consejos;
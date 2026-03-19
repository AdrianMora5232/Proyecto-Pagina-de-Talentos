import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../styles/EstilosSobreNosotros/MainSobreNosotros.css';

function MainSobreNosotros() {
    const navigate = useNavigate();

    function IrRegistro() {
        navigate('/registro');
    }

    return (
        <div className="sobre-nosotros-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <span className="hero-badge">NUESTRA ESENCIA</span>
                    <h1 className="hero-title">Nuestra <span className="text-highlight">Historia</span></h1>
                    <p className="hero-description">
                        Somos un equipo de desarrollo enfocado en crear soluciones digitales que impulsen la visibilidad 
                        del talento local. A través de nuestra plataforma, buscamos conectar profesionales con oportunidades 
                        dentro de su comunidad, utilizando herramientas tecnológicas modernas que faciliten la exposición de 
                        habilidades, portafolios y experiencia de manera accesible e intuitiva.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Ver portafolios</button>
                        {/*<button className="btn-secondary">Ver portafolios</button>*/}
                    </div>
                </div>
            </section>

            {/* Misión y Visión Section */}
            <section className="mision-vision-section">
                <div className="mv-cards-container">
                    <div className="card-mision">
                        <h2 className="mv-title">Misión</h2>
                        <p className="mv-text">
                            Brindar una plataforma digital que permita a los talentos locales mostrar sus habilidades y portafolios, facilitando su conexión con oportunidades profesionales y promoviendo el crecimiento dentro de su comunidad.
                        </p>
                        <div className="blue-line"></div>
                    </div>

                    <div className="card-vision">
                        <h2 className="mv-title">Visión</h2>
                        <p className="mv-text">
                            Convertirnos en una plataforma referente en la visibilización de talento local, promoviendo una comunidad conectada donde las habilidades y oportunidades se encuentren de manera eficiente y accesible.
                        </p>
                        <div className="gray-line"></div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                <div className="stat-item">
                    <h3 className="stat-number">+10k</h3>
                    <p className="stat-label">USUARIOS ACTIVOS</p>
                </div>
                <div className="stat-item">
                    <h3 className="stat-number">+50k</h3>
                    <p className="stat-label">PROYECTOS PUBLICADOS</p>
                </div>
                <div className="stat-item">
                    <h3 className="stat-number">7</h3>
                    <p className="stat-label">PROVINCIAS</p>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="values-header">
                    <span className="values-badge">NUESTROS VALORES</span>
                    <h2 className="values-title">Lo que nos impulsa</h2>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                        </div>
                        <h3 className="value-card-title">Innovación</h3>
                        <p className="value-card-text">
                            Aplicamos tecnologías modernas para ofrecer soluciones eficientes y mejorar continuamente la experiencia del usuario.
                        </p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                        </div>
                        <h3 className="value-card-title">Accesibilidad</h3>
                        <p className="value-card-text">
                            Diseñamos una plataforma intuitiva y fácil de usar, permitiendo que cualquier persona pueda mostrar su talento sin dificultades.
                        </p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                        </div>
                        <h3 className="value-card-title">Colaboración</h3>
                        <p className="value-card-text">
                            Promovemos la conexión entre talentos y oportunidades, fomentando el trabajo en conjunto dentro de la comunidad.
                        </p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                        </div>
                        <h3 className="value-card-title">Transparencia</h3>
                        <p className="value-card-text">
                            Garantizamos que la información presentada en los perfiles sea clara, confiable y comprensible para todos los usuarios.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">¿Listo para dar visibilidad a tu talento?</h2>
                    <p className="cta-text">
                        Conecta con tu comunidad y muestra tus habilidades a quienes están buscando lo que tú sabes hacer.
                    </p>
                    <button className="btn-cta-white" onClick={IrRegistro}>Únete a la Comunidad</button>
                </div>
            </section>
        </div>
    )
}

export default MainSobreNosotros;

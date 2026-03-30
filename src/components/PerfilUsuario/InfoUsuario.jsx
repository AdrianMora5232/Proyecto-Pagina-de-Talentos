import React from 'react'
import "../../styles/EstilosPerfilUsuario/InfoUsuarios.css";

function InfoUsuario({
    nombre = 'Juan Pérez',
    img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIoNUw4ias8XuatsiHUkkmAm3KrKmd2EKwm-D97DfZY5IackyAiQfdqFUROeoe9w7tr9hOapan2mDSn00AkVS30Lm3BKQZgj2rXj3ZET-LcUvYlyr1LTiJi37uYSOel4sWh15KhWh4KJvrACaFfHkl8LJPrqNw48tnrKisjhwGsPotAA7PsKZR_2qRExSDymiHf1O005cQrV8ka3-z4yrTGbp6BCvl0zSenuVy_ARjaa8JB457Z_xkHv8Hal0BwKxh9N_q6Y3UbSYv',
    ubicacion = 'Madrid, España'
}) {
    return (
        <div className="perfil-container">

            {/* Imagen */}
            <div className="perfil-img">
                <img 
                    src={img}
                    alt={nombre}
                />
                <div className="perfil-verificado">
                    <span className="fa-solid fa-check"></span>
                </div>
            </div>

            {/* Info */}
            <div className="perfil-info">

                <div className="perfil-top">
                    <h1>{nombre}</h1>
                </div>

                <div className="perfil-ubicacion">
                    <span className="fa-solid fa-location-dot"></span>
                    <p>{ubicacion}</p>
                </div>

                <h2>Diseñador Creativo y Artista Digital</h2>

                <div className="perfil-botones">
                    <button className="btn-contact">
                        <span className="fa-solid fa-envelope"></span>
                        Contactar
                    </button>

                    <button className="btn-follow">Seguir</button>

                    <button className="btn-share">
                        <span className="fa-solid fa-share-nodes"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoUsuario
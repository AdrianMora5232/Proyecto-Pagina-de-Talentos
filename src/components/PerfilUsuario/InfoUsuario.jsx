import React from 'react'
import "../../styles/EstilosPerfilUsuario/InfoUsuarios.css";

function InfoUsuario() {
    return (

        <div className="perfil-container">
            <div className="perfil-img">
                <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" alt="foto usuario" />
            </div>

            <div className="perfil-info">
                <h1 className="perfil-nombre">Nombre</h1>

                <div className="perfil-ubicacion">
                    <span className="fa-solid fa-location-dot"></span>
                    <h6>Ubicación</h6>
                </div>

                <h2 className="perfil-profesion">Profesión</h2>

                <p className="perfil-descripcion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>

                <div className="perfil-botones">
                    <button class="btn-contact">
                        <span class="fa-solid fa-envelope"></span>
                        Contactar
                    </button>
                    <button className="btn-follow">Seguir</button>
                </div>
            </div>
        </div>

    )
}

export default InfoUsuario
import React from 'react'
import "../../styles/EstilosPerfilUsuario/SeccionesPerfil.css"

function SeccionesPerfil() {
    return (
        <div className="tabs-container">
            <div className="tabs">

                <div className="tab active">
                    <span class="fa-solid fa-table-cells"></span>
                    <h6>Proyectos</h6>
                </div>

                <div className="tab">
                    <span class="fa-solid fa-star"></span>
                    <h6>Reseñas (42)</h6>
                </div>

                <div className="tab">
                    <span class="fa-solid fa-circle-info"></span>
                    <h6>Sobre mí</h6>
                </div>

            </div>
        </div>
    )
}

export default SeccionesPerfil
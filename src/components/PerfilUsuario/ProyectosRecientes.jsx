import React from 'react'
import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css"

function ProyectosRecientes() {
    return (
        <div className='proyectos-container'>

            <div className="proyectos-header">
                <h4>Proyectos Recientes</h4>
                <p>Ver todos</p>
            </div>

            <div className="proyectos-grid">
                <div className="proyecto-card">
                    <img src="https://images.squarespace-cdn.com/content/v1/5eb395e1fd1b486592f0948c/1750174947481-5208D20SEQ7LULNHGTIN/image-asset.jpeg?format=750w" alt="" />
                    <h4>Nombre del proyecto</h4>
                    <p>Descripción del proyecto</p>
                    <button>
                        Ver proyecto <span className="fa-solid fa-arrow-right"></span>
                    </button>
                </div>

                <div className="proyecto-card">
                    <img src="https://images.squarespace-cdn.com/content/v1/5eb395e1fd1b486592f0948c/1750174947481-5208D20SEQ7LULNHGTIN/image-asset.jpeg?format=750w" alt="" />
                    <h4>Nombre del proyecto</h4>
                    <p>Descripción del proyecto</p>
                    <button>
                        Ver proyecto <span className="fa-solid fa-arrow-right"></span>
                    </button>
                </div>
                
                <div className="proyecto-card">
                    <img src="https://images.squarespace-cdn.com/content/v1/5eb395e1fd1b486592f0948c/1750174947481-5208D20SEQ7LULNHGTIN/image-asset.jpeg?format=750w" alt="" />
                    <h4>Nombre del proyecto</h4>
                    <p>Descripción del proyecto</p>
                    <button>
                        Ver proyecto <span className="fa-solid fa-arrow-right"></span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ProyectosRecientes
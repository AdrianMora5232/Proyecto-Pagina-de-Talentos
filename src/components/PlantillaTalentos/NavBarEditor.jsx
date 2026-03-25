import React from 'react'
import "../../styles/PlantillaTalentos/NavBarEditor.css"

function NavBarEditor() {
    return (
        <nav className="navbar-editor">

            <div className="navbar-editor__left">
                <i className="fa-solid fa-layer-group logo-icon"></i>

                <div className="navbar-editor__title">
                    <h1>Creador de Portafolios</h1>
                    <p>Editando: Mi Portafolio 2024</p>
                </div>
            </div>

            <div className="navbar-editor__center">
                <a href="#">Mis Proyectos</a>
                <a href="#">Explorar</a>
                <a href="#">Ajustes</a>
            </div>

            <div className="navbar-editor__right">
                <button className="btn-preview">
                    <i className="fa-solid fa-eye"></i> Vista previa
                </button>

                <button className="btn-save">
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                </button>

                <img src="#" alt="user" className="avatar" />
            </div>

        </nav>
    )
}

export default NavBarEditor
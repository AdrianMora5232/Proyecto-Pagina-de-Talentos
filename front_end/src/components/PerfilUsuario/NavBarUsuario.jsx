import React from 'react'
import "../../styles/EstilosPerfilUsuario/NavBarUsuario.css";

function NavBarUsuario() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>KREA</h1>
            </div>
            <div className="icon-buttons">

                <button className="icon-btn">
                    <span className="fa-regular fa-bell"></span>
                </button>

                <button className="icon-btn">
                    <span className="fa-solid fa-gear"></span>
                </button>

            </div>
        </div>
    )
}

export default NavBarUsuario
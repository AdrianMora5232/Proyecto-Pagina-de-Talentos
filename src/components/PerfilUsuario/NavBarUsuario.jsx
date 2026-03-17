import React from 'react'
import "../../styles/EstilosPerfilUsuario/NavBarUsuario.css";

function NavBarUsuario() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="#" alt="logo" />
                <h1>Krea</h1>
            </div>
            <div className="icon-buttons">

                <button class="icon-btn">
                    <span class="fa-regular fa-bell"></span>
                </button>

                <button class="icon-btn">
                    <span class="fa-solid fa-gear"></span>
                </button>

            </div>
        </div>
    )
}

export default NavBarUsuario
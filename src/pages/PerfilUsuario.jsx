import React from 'react'
import NavBarUsuario from '../components/PerfilUsuario/NavBarUsuario'
import InfoUsuario from '../components/PerfilUsuario/InfoUsuario'
import SeccionesPerfil from '../components/PerfilUsuario/SeccionesPerfil'
import ProyectosRecientes from '../components/PerfilUsuario/ProyectosRecientes'
import "../styles/EstilosPerfilUsuario/PerfilUsuario.css"


function PerfilUsuario() {
    return (
        <div className="perfil-page">

            <NavBarUsuario />

            <div className="perfil-content">
                <InfoUsuario />
            </div>

            <div className="secciones-perfil">
                <SeccionesPerfil />
            </div>

            <div>
                <ProyectosRecientes />
            </div>

        </div>
    )
}

export default PerfilUsuario
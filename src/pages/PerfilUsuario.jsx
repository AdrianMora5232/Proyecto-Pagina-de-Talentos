import React, { useState, useEffect } from 'react'
import NavBarUsuario from '../components/PerfilUsuario/NavBarUsuario'
import InfoUsuario from '../components/PerfilUsuario/InfoUsuario'
import SeccionesPerfil from '../components/PerfilUsuario/SeccionesPerfil'
import ProyectosRecientes from '../components/PerfilUsuario/ProyectosRecientes'
import "../styles/EstilosPerfilUsuario/PerfilUsuario.css"
import Fetch from '../services/Fetch'

function PerfilUsuario() {
    const [usuarioPerfil, setUsuarioPerfil] = useState(null);

    useEffect(() => {
        async function fetchUsuario() {
            try {
                const data = await Fetch.getData("usuarios");

                const usuarioActivo = JSON.parse(localStorage.getItem("UsuarioActivo"));

                const user = data.find(
                    (u) => String(u.id) === String(usuarioActivo?.id)
                );

                setUsuarioPerfil(user || null);

            } catch (error) {
                console.error("Error cargando usuario:", error);
            }
        }

        fetchUsuario();
    }, []);

    const usuarioActivo = JSON.parse(localStorage.getItem("UsuarioActivo"));

    return (
        <div className="perfil-page">

            <NavBarUsuario />

            <div className="perfil-content">
                <InfoUsuario
                    usuario={usuarioPerfil}
                    isOwner={String(usuarioActivo?.id) === String(usuarioPerfil?.id)}
                    onUpdate={() => window.location.reload()}
                />
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

export default PerfilUsuario;
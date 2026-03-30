import React, { useState, useEffect } from 'react';
import NavBarUsuario from '../components/PerfilUsuario/NavBarUsuario';
import InfoUsuario from '../components/PerfilUsuario/InfoUsuario';
import SeccionesPerfil from '../components/PerfilUsuario/SeccionesPerfil';
import ProyectosRecientes from '../components/PerfilUsuario/ProyectosRecientes';
import "../styles/EstilosPerfilUsuario/PerfilUsuario.css";
import Fetch from '../services/Fetch';
import ResenasUsuario from '../components/PerfilUsuario/ReseñasUsuario';

function PerfilUsuario() {
    const [usuarioPerfil, setUsuarioPerfil] = useState(null);

    const cargarUsuario = async () => {
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
    };

    useEffect(() => {
        cargarUsuario();
    }, []);

    const usuarioActivo = JSON.parse(localStorage.getItem("UsuarioActivo"));

    return (
        <div className="perfil-page">

            {/* NAVBAR */}
            <NavBarUsuario />

            {/* PERFIL */}
            <div className="perfil-content">
                <InfoUsuario
                    usuario={usuarioPerfil}
                    isOwner={String(usuarioActivo?.id) === String(usuarioPerfil?.id)}
                    onUpdate={cargarUsuario} // 🔥 mejor que reload
                />
            </div>

            {/* SECCIONES */}
            <div className="secciones-perfil">
                <SeccionesPerfil />
            </div>

            {/* RESEÑAS NUEVAS */}
            <div className="perfil-resenas">
                <ResenasUsuario />
            </div>

            {/* PROYECTOS */}
            <div>
                <ProyectosRecientes />
            </div>

        </div>
    );
}

export default PerfilUsuario;
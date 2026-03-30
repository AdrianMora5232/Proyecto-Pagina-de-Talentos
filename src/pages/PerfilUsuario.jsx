import React from 'react'
import NavBarUsuario from '../components/PerfilUsuario/NavBarUsuario'
import InfoUsuario from '../components/PerfilUsuario/InfoUsuario'
import SeccionesPerfil from '../components/PerfilUsuario/SeccionesPerfil'
import ProyectosRecientes from '../components/PerfilUsuario/ProyectosRecientes'
import Calificacion from '../components/CalificacionEstrellas/Calificacion'
import "../styles/EstilosPerfilUsuario/PerfilUsuario.css"
import { useState, useEffect } from 'react'
import Fetch from '../services/Fetch'
function PerfilUsuario() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            const data = await Fetch.getData("usuarios");
            console.log(data);
            const usuarioLogeado = data.filter((usuario) => usuario.id == JSON.parse(localStorage.getItem("UsuarioActivo")).id);
            console.log(usuarioLogeado);

            setUsuarios(usuarioLogeado);
        }
        fetchUsuarios();
    }, [])

    return (
        <div className="perfil-page">

            <NavBarUsuario />

            <div className="perfil-content">
                <InfoUsuario
                    nombre={usuarios.length > 0 ? usuarios[0].Nombre : "Cargando..."}
                    img={usuarios.length > 0 ? usuarios[0].img : "https://via.placeholder.com/150"}
                    ubicacion={usuarios.length > 0 ? usuarios[0].Provincias  : "Cargando..."}
                />
            </div>

            <div className="secciones-perfil">
                <SeccionesPerfil />
            </div>

            <Calificacion />
            <div>
                <ProyectosRecientes />
            </div>

        </div>
    )
}

export default PerfilUsuario
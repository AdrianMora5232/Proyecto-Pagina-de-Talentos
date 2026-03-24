import React from 'react'
import { useState } from 'react'
import Fetch from '../services/Fetch'
import { useNavigate } from 'react-router-dom'
import '../styles/EstilosRegistros/Registro.css'

function Registro() {
    const navigate = useNavigate()
    const volver = () => {
        navigate("/")
    }
    const [Nombre, setNombre] = useState("")
    const [Correo, setCorreo] = useState("")
    const [Provincias, setProvincia] = useState("")
    const [Canton, setCanton] = useState("")
    const [Distrito, setDistrito] = useState("")
    const [Roles, setRol] = useState("")
    const [Contrasena, setContraseña] = useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    async function RegistroUsuarios() {
        if (Nombre === "" || Correo === "" || Provincias === "" || Canton === "" || Distrito === "" || Roles == "" || Contrasena === "") {
            alert("Debe de llenar todo los campos");
            return;
        }
        const objUsuarios = {
            Nombre: Nombre,
            Correo: Correo,
            Provincias: Provincias,
            Canton: Canton,
            Distrito: Distrito,
            Roles: Roles,
            Contrasena: Contrasena
        }
        if (Contrasena.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres")
            return;
        }
        if (!emailRegex.test(Correo)) {
            alert("Correo inválido");
            return;
        }
        const UsuarioAlmacenado = await Fetch.postData(objUsuarios, "usuarios")
        alert("Registro exitoso")

        console.log(UsuarioAlmacenado)

    }
    const validacionContraseña = () => {

    }


    return (
        <div className='MainRegistroContainer'>
            <div className='BackgroundDecoration'>
                {/* Aquí podría ir una imagen o gradiente al lado izquierdo */}
                <h1 className='TituloBienvenido'>Bienvenido a <span className='BrandName'>Krea</span></h1>
                <p>Únete a nuestra comunidad de talentos y muestra al mundo lo que puedes hacer.</p>
            </div>

            <div className='CardRegistro'>
                <h2 className='TituloRegistro'>Crear cuenta</h2>
                <div className='FormRegistro'>
                    <div className='InputGroup'>
                        <label>Nombre Completo</label>
                        <input type="text" value={Nombre} onChange={(evento) => setNombre(evento.target.value)} placeholder="Ej. Juan Pérez" />
                    </div>

                    <div className='InputGroup'>
                        <label>Correo electrónico</label>
                        <input type="email" value={Correo} onChange={(evento) => setCorreo(evento.target.value)} placeholder="usuario@ejemplo.com" />
                    </div>

                    <div className='InputRow'>
                        <div className='InputGroup'>
                            <label>Provincia</label>
                            <select onChange={(evento) => setProvincia(evento.target.value)} defaultValue="">
                                <option value="" disabled>Seleccione</option>
                                <option value="San José">San José</option>
                                <option value="Alajuela">Alajuela</option>
                                <option value="Heredia">Heredia</option>
                                <option value="Limón">Limón</option>
                                <option value="Guanacaste">Guanacaste</option>
                                <option value="Puntarenas">Puntarenas</option>
                                <option value="Cartago">Cartago</option>
                            </select>
                        </div>
                        <div className='InputGroup'>
                            <label>Cantón</label>
                            <input type="text" value={Canton} onChange={(evento) => setCanton(evento.target.value)} placeholder="Su cantón" />
                        </div>
                    </div>

                    <div className='InputRow'>
                        <div className='InputGroup'>
                            <label>Distrito</label>
                            <input type="text" value={Distrito} onChange={(evento) => setDistrito(evento.target.value)} placeholder="Su distrito" />
                        </div>
                        <div className='InputGroup'>
                            <label>Rol</label>
                            <select onChange={(evento) => setRol(evento.target.value)} defaultValue="">
                                <option value="" disabled>Seleccione</option>
                                <option value="Usuario">Usuario</option>
                            </select>
                        </div>
                    </div>

                    <div className='InputGroup'>
                        <label>Contraseña</label>
                        <input type="password" value={Contrasena} onChange={(evento) => setContraseña(evento.target.value)} placeholder="Mínimo 8 caracteres" />
                    </div>

                    <div className='ButtonContainer'>
                        <button className='BotonCrear' onClick={RegistroUsuarios}>Crear Cuenta</button>
                        <button className='BotonRegresar' onClick={volver}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro
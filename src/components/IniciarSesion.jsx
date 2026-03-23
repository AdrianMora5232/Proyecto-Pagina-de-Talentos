import React, { useState } from 'react'
import { useEffect } from 'react'
import Fetch from '../services/Fetch'
import { useNavigate } from "react-router-dom";
import '../styles/InicioSesion.css'



function IniciarSesion() {
    const [Correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [Rol, setRol] = useState("")
    const navigate = useNavigate()
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {

        async function traerUsuarios() {
            const lista = await Fetch.getData("usuarios")
            setUsuarios(lista)


        }
        traerUsuarios()
    }, [])
    function validarInicio() {
        const usuarioValido = usuarios.find((usuario) => usuario.Correo == Correo && usuario.Contrasena == contrasena)
        if (usuarioValido) {
            alert("Ingreso Exitoso")
            localStorage.setItem("UsuarioActivo", JSON.stringify(usuarioValido));
            navigate("/principal")
        } else {
            alert("El usuario no existe")
        }
    }
    return (
        <div className='MainLoginContainer'>
            <div className='HeaderActions'>
                <button className='BotonVolver' onClick={() => navigate("/")}>
                   ← Volver al Inicio
                </button>
            </div>
            <div className='headerLogo'>
                <img src="" alt="Logo" />
                <h3 className='TituloLogo'>Krea</h3>
            </div>

            <div className='DivForm'>
                <h2 className='TituloPrincipal'> <strong>Iniciar sesión</strong> </h2>
                <div className='ParrafoForm'>
                    <h6 className='SubtituloForm'>Inicia sesión para mostrar tu talento</h6>
                    
                    <div className='InputGroup'>
                        <label>Correo electrónico</label>
                        <input type="email" value={Correo} onChange={(evento) => setCorreo(evento.target.value)} placeholder="tu@correo.com" />
                    </div>

                    <div className='InputGroup'>
                        <label>Contraseña</label>
                        <input type="password" value={contrasena} onChange={(evento) => setContrasena(evento.target.value)} placeholder="********" />
                    </div>

                    <div className='InputGroup'>
                        <label>Tipo de rol</label>
                        <select onChange={(evento) => setRol(evento.target.value)} defaultValue="">
                            <option value="" disabled>Seleccione el tipo de rol</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <button className='BotonEntrar' onClick={validarInicio}>Entrar ahora </button>
                    
                    <div className='RegistroPrompt'>
                        <h6>¿No tienes cuenta?
                            <a className='link_registro' href="http://localhost:5174/Registro">Regístrate Aquí</a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IniciarSesion
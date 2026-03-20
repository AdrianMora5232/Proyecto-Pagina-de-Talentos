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
        <div>
            <div className='headerLogo'>
                <img src="" alt="Logo" />
                <h3 className='TituloLogo'>Krea</h3>
            </div>

            <div className='DivForm'>

                <h2 className='TituloPrincipal'> <strong>Iniciar sesión</strong> </h2>
                <div className='ParrafoForm'>
                    <h6>Inicia sesion para mostrar tu talento</h6>
                    <br />
                    <br />
                    <h4>Correo electronico</h4>
                    <input type="email" value={Correo} onChange={(evento) => setCorreo(evento.target.value)} />
                    <h4>Contraseña</h4>
                    <input type="password" value={contrasena} onChange={(evento) => setContrasena(evento.target.value)} />
                    <h4>Tipo de rol</h4>
                    <select onChange={(evento) => setRol(evento.target.value)}>
                        <option value="" selected disabled>Seleccione el tipo de rol</option>
                        <option value="Usuario">Usuario</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <br />
                    <br />
                    <br />
                    <button className='BotonEntrar' onClick={validarInicio}>Entrar ahora </button>
                    <br />
                    <h6>¿No tienes cuenta?
                        <a className='link_registro' href="http://localhost:5174/Registro">Registrate Aqui</a>
                    </h6>
                </div>
            </div>



        </div>
    )
}

export default IniciarSesion
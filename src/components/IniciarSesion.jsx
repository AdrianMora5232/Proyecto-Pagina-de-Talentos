import React, { useState } from 'react'
import { useEffect } from 'react'
import Fetch from '../services/Fetch'
import { useNavigate } from "react-router-dom";

function IniciarSesion() {
    const [Correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [Rol, setRol] = useState("")
    const navigate = useNavigate()
    const [usuarios,setUsuarios] = useState([])
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
            <h2>Iniciar sesión </h2>


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
            <button onClick={validarInicio}>Iniciar Sesión </button>




        </div>
    )
}

export default IniciarSesion
import React from 'react'
import { useState } from 'react'
import '../../styles/EstilosAdmin/AgregarUsuario.css' 
import Fetch from '../../services/Fetch'

function AgregarUsuario() {
const [Nombre , setNombre] = useState("")
const [ Correo , setCorreo] = useState("")
const [Email, setEmail] = useState("")
const [Telefono, setTelefono] = useState("")
const [Provincias , setProvincia] =useState("")
const [Canton,setCanton] = useState("")
const [Distrito,setDistrito] = useState("")
const [Roles , setRol] = useState("")
const [Contrasena , setContraseña] = useState("")
async function RegistroUsuarios () { 
    if ( Nombre === "" || Correo === "" || Email === "" || Telefono === "" || Provincias === "" || Canton === "" || Distrito === "" || Roles =="" || Contrasena ==="" ){


     alert("Debe de llenar todo los campos");
     return;


    }else{

        alert("Registro exitoso")
    }
  const objUsuarios = {
    Nombre : Nombre,
    Correo : Correo,
    email: Email,
    telefono: Telefono,
    Provincias : Provincias,
    Canton : Canton,
    Distrito : Distrito,
    Roles : Roles,
    Contrasena : Contrasena
  }
  const UsuarioAlmacenado = await Fetch.postData(objUsuarios,"usuarios")
  console.log(UsuarioAlmacenado)
  
   
        
}





  return (
    <div className="agregar-usuario-container">
        <h2 className="agregar-usuario-title">Crea tu cuenta</h2>
        <p className="agregar-usuario-subtitle">Completa tus datos para empezar tu viaje en ProShowcase.</p>
        
        <h4 className="agregar-usuario-label">Nombre completo</h4>
        <input className="agregar-usuario-input icon-user" type="text" placeholder="Ej. Juan Pérez" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
        
        <h4 className="agregar-usuario-label">Correo electrónico</h4> 
        <input className="agregar-usuario-input icon-mail" type="email" placeholder="nombre@ejemplo.com" value={Correo} onChange={(e) => setCorreo(e.target.value)} />
        
        <h4 className="agregar-usuario-label">Provincia</h4>
        <select className="agregar-usuario-input icon-map select-icon" value={Provincias} onChange={(e) => setProvincia(e.target.value)}>
            <option value=" ">Selecciona una provincia</option>
            <option value="San José">San José</option>
            <option value="Alajuela">Alajuela</option>
            <option value="Heredia">Heredia</option>
            <option value="Limón">Limón</option>
            <option value="Guanacaste">Guanacaste</option>
            <option value="Puntarenas">Puntarenas</option>
            <option value="Cartago">Cartago</option>
        </select>
        
        <h4 className="agregar-usuario-label">Cantón</h4>
        <input className="agregar-usuario-input icon-building" type="text" placeholder="Selecciona un cantón" value={Canton} onChange={(e) => setCanton(e.target.value)} />
        
        <h4 className="agregar-usuario-label">Distrito</h4>
        <input className="agregar-usuario-input icon-pin" type="text" placeholder="Selecciona un distrito" value={Distrito} onChange={(e) => setDistrito(e.target.value)} />
        
        <h4 className="agregar-usuario-label">Rol</h4>
        <select className="agregar-usuario-input icon-users select-icon" value={Roles} onChange={(e) => setRol(e.target.value)}>
            <option value=" ">Seleccionar un rol</option>
            <option value="Admin">Admin</option>
            <option value="Usuario">Usuario</option>
        </select>
        
        <h4 className="agregar-usuario-label">Contraseña</h4>
        <input className="agregar-usuario-input icon-lock" type="password" placeholder="Crea una contraseña segura" value={Contrasena} onChange={(e) => setContraseña(e.target.value)} />
        
        <p className="agregar-usuario-hint">Mínimo 8 caracteres, incluyendo números y símbolos.</p>
        
        <div className="agregar-usuario-terms">
            <input type="checkbox" id="terms" className="checkbox-input" />
            <label htmlFor="terms">Acepto los <span className="text-blue">términos de servicio</span> y la <span className="text-blue">política de privacidad</span>.</label>
        </div>

        <button className="agregar-usuario-button" onClick={RegistroUsuarios}>Agregar Usuario</button>
    </div>
  )
}

export default AgregarUsuario
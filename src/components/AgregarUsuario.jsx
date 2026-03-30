import React from 'react'
import { useState } from 'react'
import Fetch from '../services/Fetch'

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
    <div>
        <h2>Agregar Usuario</h2>
        <h4>Nombre</h4>
        <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
        <h4>Correo</h4> 
        <input type="email" name="Correo" value={Correo} onChange={(e) => setCorreo(e.target.value)} />
        <h4>Email</h4>
        <input type="email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
        <h4>Teléfono</h4>
        <input type="text" name="telefono" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
        <h4>Provincia</h4>
        <select value={Provincias} onChange={(e) => setProvincia(e.target.value)}>
            <option value=" ">Seleccionar</option>
            <option value="San José">San José</option>
            <option value="Alajuela">Alajuela</option>
            <option value="Heredia">Heredia</option>
            <option value="Limón">Limón</option>
            <option value="Guanacaste">Guanacaste</option>
            <option value="Puntarenas">Puntarenas</option>
            <option value="Cartago">Cartago</option>
        </select>
        <h4>Canton</h4>
        <input type="text" value={Canton} onChange={(e) => setCanton(e.target.value)} />
        <h4>Distrito</h4>
        <input type="text" value={Distrito} onChange={(e) => setDistrito(e.target.value)} />
        <h4>Rol</h4>
        <select value={Roles} onChange={(e) => setRol(e.target.value)}>
            <option value=" ">Seleccionar</option>
            <option value="Admin">Admin</option>
            <option value="Usuario">Usuario</option>
        </select>
        <h4>Contraseña</h4>
        <input type="password" value={Contrasena} onChange={(e) => setContraseña(e.target.value)} />
        <br />
        <button onClick={RegistroUsuarios}>Agregar Usuario</button>

    </div>
  )
}

export default AgregarUsuario
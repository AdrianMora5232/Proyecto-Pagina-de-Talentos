import React from 'react'
import { useState } from 'react'
import Fetch from '../services/Fetch'

function Registro() {

const [Nombre , setNombre] = useState("")
const [ Correo , setCorreo] = useState("")
const [Provincias , setProvincia] =useState("")
const [Canton,setCanton] = useState("")
const [Distrito,setDistrito] = useState("")
const [Roles , setRol] = useState("")
const [Contrasena , setContraseña] = useState("")
async function RegistroUsuarios () { 
    if ( Nombre === "" || Correo === "" || Provincias === "" || Canton === "" || Distrito === "" || Roles =="" || Contrasena ==="" ){


     alert("Debe de llenar todo los campos");
     return;


    }else{


        
        alert("Registro exitoso")
    }
  const objUsuarios = {
    Nombre : Nombre,
    Correo : Correo,
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
            <h2>Crear cuenta </h2>


            <h4>Nombre Completo</h4>
            <input type="text" value={Nombre} onChange={(evento) => setNombre(evento.target.value)} />
            <h4>Correo electronico</h4>
            <input type="email" value={Correo} onChange={(evento)=> setCorreo(evento.target.value)} />
            <h4>Provicias</h4>
            <select onChange={(evento)=> setProvincia(evento.target.value) }>
                <option > Provincias</option>
                <option value= "San José">San José</option>
                <option value = "Alajuela" >Alajuela</option>
                <option value = "Heredia">Heredia</option>
                <option value =  "Limón">Limón</option>
                <option value = "Guanacaste">Guanacaste</option>
                <option value = "Puntarenas">Puntarenas</option>
                <option value = "Cartago" >Cartago</option>
            </select>
            <h4>Canton</h4>
            <input type="text" value={Canton} onChange={(evento)=> setCanton(evento.target.value)} />
            <h4>Distrito</h4>
            <input type="text" value={Distrito} onChange={(evento) => setDistrito(evento.target.value)} />
            <br />
            <h4>Rol</h4>
            <select onChange={(evento)=> setRol(evento.target.value)}>
                <option value="Admin">Admin</option>
                <option value="Usuario">Usuario</option>
            </select>
            <h4>Contraseña</h4>
            <input type="password" value={Contrasena} onChange={(evento)=> setContraseña(evento.target.value)} />
            <br />
            <br />
            <button onClick={RegistroUsuarios} >Crear Cuenta</button>
        </div>
    )
}

export default Registro
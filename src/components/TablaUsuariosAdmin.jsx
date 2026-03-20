import React from 'react'
import { useState, useEffect } from 'react'
import Fetch from '../services/Fetch'


const TablaUsuariosAdmin = () => {

const [usuarios,setUsuarios] = useState([])
 
useEffect(() => {

    async function traerUsuarios() {
        const lista = await Fetch.getData("usuarios")
        setUsuarios(lista)

}
traerUsuarios()
}, [])

const eliminarUsuario = async (id) => {
  await Fetch.deleteData("usuarios", id)

  const lista = await Fetch.getData("usuarios")
  setUsuarios(lista)
}
const editarUsuario = async (id) => {
 await Fetch.putData("usuarios", id,)  
 const lista = await Fetch.getData("usuarios")
  setUsuarios(lista)
}


  return (
    <div className='TablaUsuariosAdmin'>
        <h2>Gestión de usuarios</h2>
<div className='tabla'>

<div className='headerTabla'>
         <p>Usuario</p>
          <p>Email</p>
          <p>Rol</p>
          <p>Ubicación</p>
</div>
{usuarios.map((usuario) => (
  <div className='filaTabla' key={usuario.id}>
    <p>{usuario.Nombre}</p>
    <p>{usuario.Correo}</p>
    <p>{usuario.Roles}</p>
    <p>{usuario.Provincias},{usuario.Canton},{usuario.Distrito}</p>

   <div>
<button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
   </div>
   <div>
<button onClick={() => editarUsuario(usuario.id)}>Editar</button>
   </div>
  </div>

))}

</div>

    </div>
  )
}

export default TablaUsuariosAdmin
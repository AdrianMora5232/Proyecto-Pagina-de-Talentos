import React from 'react'
import { useState, useEffect } from 'react'
import Fetch from '../services/Fetch'
import {  useNavigate } from 'react-router-dom'

const TablaUsuariosAdmin = () => {
 const navigate = useNavigate()
 const AgregarUsuario = () => {
  navigate("/AgregarUsuario")
 }
  const [usuarios, setUsuarios] = useState([])
  const [editar, setEditar] = useState(null)
  const [datosEditar, setDatosEditar] = useState({
    Nombre: "",
    Correo: "",
    Provincias: "",
    Canton: "",
    Distrito: "", 
    Roles: "",
  })



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

  const UsuarioEditado = (usuario) => {
    setEditar(usuario.id)
    setDatosEditar(usuario)
  }





  const editarUsuario = async (id) => {
    try {
      await Fetch.patchData("usuarios",{
        Nombre: datosEditar.Nombre,
        Correo: datosEditar.Correo,
        Provincias: datosEditar.Provincias,
        Canton: datosEditar.Canton,
        Distrito: datosEditar.Distrito,
        Roles: datosEditar.Roles,
      } , id)
      const lista = await Fetch.getData("usuarios")
      setUsuarios(lista)
      setEditar(null)
      console.log(datosEditar);
      
    } catch (error) {

    }
  }

  const cancelarEdicion = () => {
    setEditar(null)
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
            {editar === usuario.id ? (
              <>
                <input value={datosEditar.Nombre} onChange={(evento) => setDatosEditar({ datosEditar, Nombre: evento.target.value })} />
                <input value={datosEditar.Correo} onChange={(evento) => setDatosEditar({ datosEditar, Correo: evento.target.value })} />
                <input value={datosEditar.Roles} onChange={(evento) => setDatosEditar({ datosEditar, Roles: evento.target.value })} />
                <input value={datosEditar.Provincias} onChange={(evento) => setDatosEditar({ datosEditar, Provincias: evento.target.value })} />
                <input value={datosEditar.Canton} onChange={(evento) => setDatosEditar({ datosEditar, Canton: evento.target.value })} />
                <input value={datosEditar.Distrito} onChange={(evento) => setDatosEditar({ datosEditar, Distrito: evento.target.value })} />

                <div>
                  <button onClick={() => editarUsuario(usuario.id)}>
                    Guardar
                  </button>
                  <button onClick={cancelarEdicion}>
                    Cancelar
                  </button>
                </div>
              </>



            ) : (
            <>
              <p>{usuario.Nombre}</p>
              <p>{usuario.Correo}</p>
              <p>{usuario.Roles}</p>
              <p>{usuario.Provincias},{usuario.Canton},{usuario.Distrito}</p>

              <div>

                <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
              </div>
              <div>
                <button onClick={() => UsuarioEditado(usuario)}>Editar</button>
              </div>
              <div>
              
              </div>
            </>
            )}
            
          </div>

        ))}
<div>
  <button onClick={AgregarUsuario}>Agregar Usuario</button>
</div>
      </div>

    </div>
  )
}

export default TablaUsuariosAdmin
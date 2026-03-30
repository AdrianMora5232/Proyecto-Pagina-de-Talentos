import React from 'react'
import { useState, useEffect } from 'react'
import Fetch from '../services/Fetch'
import { useNavigate } from 'react-router-dom'

const TablaUsuariosAdmin = () => {
  const navigate = useNavigate()
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [filtroRol, setFiltroRol] = useState("TODOS")
  const [editar, setEditar] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [datosEditar, setDatosEditar] = useState({
    id: "",
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
      setUsuarios(lista || [])
    }
    traerUsuarios()
  }, [])

  const AgregarUsuario = () => {
    navigate("/AgregarUsuario")
  }

  const irAConvocatoria = () => {
    navigate("/FormularioConvo")
  }

  const eliminarUsuario = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      const exito = await Fetch.deleteData("usuarios", id)
      if (exito) {
        setUsuarios(prev => prev.filter(u => u.id !== id))
      } else {
        alert("No se pudo eliminar el usuario. Revisa la conexión al servidor.")
      }
    }
  }

  const iniciarEdicion = (usuario) => {
    setDatosEditar(usuario)
    setIsModalOpen(true)
  }

  const guardarEdicion = async (id) => {
    try {
      await Fetch.patchData("usuarios", {
        Nombre: datosEditar.Nombre,
        Correo: datosEditar.Correo,
        Provincias: datosEditar.Provincias,
        Canton: datosEditar.Canton,
        Distrito: datosEditar.Distrito,
        Roles: datosEditar.Roles,
      }, id)
      const lista = await Fetch.getData("usuarios")
      setUsuarios(lista || [])
      setIsModalOpen(false)
    } catch (error) {
      console.error("Error al editar usuario:", error)
    }
  }

  const cancelarEdicion = () => {
    setIsModalOpen(false)
  }

  const usuariosFiltrados = usuarios.filter(u => {
    const coincideNombre = (u.Nombre || "").toLowerCase().includes(busqueda.toLowerCase())
    const coincideCorreo = (u.Correo || "").toLowerCase().includes(busqueda.toLowerCase())
    const coincideRol = filtroRol === "TODOS" || u.Roles === filtroRol
    return (coincideNombre || coincideCorreo) && coincideRol
  })

  return (
    <div className="max-w-7xl mx-auto p-8 font-display">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Gestión de Usuarios</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Administra los accesos y perfiles de tu plataforma.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={irAConvocatoria}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined">campaign</span>
            Convocatoria
          </button>
          <button 
            onClick={AgregarUsuario}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined">person_add</span>
            Agregar Usuario
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row gap-4 items-center mb-6">
        <div className="relative w-full lg:flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary text-sm outline-none transition-all" 
            placeholder="Buscar por nombre o correo electrónico..." 
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="flex gap-2">
            <button 
              onClick={() => setFiltroRol("TODOS")}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition-colors ${filtroRol === "TODOS" ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/5'}`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFiltroRol("Admin")}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition-colors ${filtroRol === "Admin" ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/5'}`}
            >
              Admin
            </button>
            <button 
              onClick={() => setFiltroRol("Cliente")}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-lg transition-colors ${filtroRol === "Cliente" ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/5'}`}
            >
              Cliente
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Usuario</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Email</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Rol</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Ubicación</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {usuariosFiltrados.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                        {usuario.Imagen ? (
                          <img src={usuario.Imagen} alt={usuario.Nombre} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-primary font-bold">{usuario.Nombre?.charAt(0)}</span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{usuario.Nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{usuario.Correo}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      usuario.Roles === 'Admin' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                    }`}>
                      {usuario.Roles}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {`${usuario.Provincias || ''}, ${usuario.Canton || ''}, ${usuario.Distrito || ''}`}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => iniciarEdicion(usuario)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button 
                        onClick={() => eliminarUsuario(usuario.id)}
                        className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {usuariosFiltrados.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                    No se encontraron usuarios que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Info */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Mostrando <span className="font-medium">{usuariosFiltrados.length}</span> de <span className="font-medium">{usuarios.length}</span> usuarios
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-400 cursor-not-allowed">Anterior</button>
            <button className="px-3 py-1 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">Siguiente</button>
          </div>
        </div>
        </div>

      {/* Edit User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">edit_square</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Editar Usuario</h3>
              </div>
              <button 
                onClick={cancelarEdicion}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-400 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nombre Completo</label>
                  <input 
                    value={datosEditar.Nombre} 
                    onChange={(e) => setDatosEditar({ ...datosEditar, Nombre: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Correo Electrónico</label>
                  <input 
                    value={datosEditar.Correo} 
                    onChange={(e) => setDatosEditar({ ...datosEditar, Correo: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Rol de Usuario</label>
                  <select 
                    value={datosEditar.Roles} 
                    onChange={(e) => setDatosEditar({ ...datosEditar, Roles: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="Admin">Administrador</option>
                    <option value="Cliente">Cliente / Talento</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Provincia</label>
                  <input 
                    value={datosEditar.Provincias} 
                    onChange={(e) => setDatosEditar({ ...datosEditar, Provincias: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Cantón</label>
                  <input 
                    value={datosEditar.Canton} 
                    onChange={(e) => setDatosEditar({ ...datosEditar, Canton: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Distrito</label>
                  <input 
                    value={datosEditar.Distrito} 
                    onChange={(e) => setDatosEditar({ ...datosEditar, Distrito: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button 
                onClick={cancelarEdicion}
                className="px-6 py-2.5 rounded-xl text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Cancelar
              </button>
              <button 
                onClick={() => guardarEdicion(datosEditar.id)}
                className="px-8 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TablaUsuariosAdmin

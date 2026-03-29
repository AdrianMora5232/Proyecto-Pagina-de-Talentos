import React, { useState, useEffect } from 'react'
import Fetch from '../services/Fetch'

const DashboardAdmin = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function traerUsuarios() {
      try {
        const listaUsuarios = await Fetch.getData("usuarios")
        setUsuarios(listaUsuarios || [])
      } catch (error) {
        console.error("Error trayendo usuarios", error)
      }
    }
    traerUsuarios()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-8 font-display">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Dashboard</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Resumen general de tu plataforma.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-3xl font-variation-settings-fill-1">group</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Usuarios</p>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{usuarios.length}</h3>
            </div>
          </div>
        </div>
        
        {/* Placeholder cards for other stats */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center opacity-60">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500/10 text-emerald-500 p-3 rounded-lg">
              <span className="material-symbols-outlined text-3xl">folder_special</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Portafolios</p>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">--</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified User List */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Usuarios Recientes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Usuario</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Email</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Rol</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Ubicación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                        {usuario.Imagen ? (
                          <img src={usuario.Imagen} alt={usuario.Nombre} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-primary text-xs font-bold">{usuario.Nombre?.charAt(0)}</span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{usuario.Nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{usuario.Correo}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      usuario.Roles === 'Admin' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                    }`}>
                      {usuario.Roles}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {`${usuario.Provincias || ''}, ${usuario.Canton || ''}`}
                  </td>
                </tr>
              ))}
              {usuarios.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-6 py-8 text-center text-slate-500 text-sm">
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardAdmin

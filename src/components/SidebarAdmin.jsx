import React from 'react'
function SidebarAdmin({ mostrandoDashboard, mostrandoUsuarios, mostrandoPortafolio }) {
  return (
    <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">auto_awesome_motion</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">ProShowcase</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <button 
          onClick={mostrandoDashboard}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors text-left"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-sm font-semibold">Dashboard</span>
        </button>

        <button 
          onClick={mostrandoUsuarios}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors text-left"
        >
          <span className="material-symbols-outlined">group</span>
          <span className="text-sm font-semibold">Gestión de Usuarios</span>
        </button>

        <button 
          onClick={mostrandoPortafolio}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors text-left"
        >
          <span className="material-symbols-outlined">folder_special</span>
          <span className="text-sm font-semibold">Gestión de Portafolios</span>
        </button>
      </nav>

      <div className="px-4 mb-2">
        <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm font-semibold">Configuración</span>
        </a>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
            <img 
              alt="Avatar del administrador" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeybCgPhC1ocx-4PJRm0mZihLw2LDn2y9mAx5gwOJTP9nwzE4ozZmwmxYWYQSHiPAh9B4nHm0_DAjtP0gBWUXaf28FxvbJvMoJMzrd5paie9rktLifB50ifKfQ1UrNom3485NT4GfPJA-hv8M5ZezkR1alkA0MHKwnPrFBp5u2U8GoWMtX-JTGb2brANvYbsWC5BCFn5S2-w9XC85rlfzvQ3y6FidTnWqLrr1O7SB7LaSbtbpGsAkYDGQx1voh1O9BUekTlWn-eMF9"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Admin User</p>
            <p className="text-xs text-slate-500 truncate">admin@proshowcase.com</p>
          </div>
          <span className="material-symbols-outlined text-slate-400 cursor-pointer">logout</span>
        </div>
      </div>
    </aside>
  )
}

export default SidebarAdmin
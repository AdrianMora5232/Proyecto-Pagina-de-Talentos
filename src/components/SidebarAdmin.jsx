import React from 'react'
 import { Navigate } from 'react-router-dom'
function SidebarAdmin({mostrandoDashboard,mostrandoUsuarios,mostrandoPortafolio}) {
  return (
    <aside className='sidebar'>
     <h2>Krea</h2>
     <ul>
      <li className='active' onClick={mostrandoDashboard}>Dashboard</li>
      <li onClick={mostrandoUsuarios}>Gestión de usuarios</li>
      <li onClick={mostrandoPortafolio}>Gestion de Portafolios</li>
     </ul>



    </aside>
  )
}

export default SidebarAdmin
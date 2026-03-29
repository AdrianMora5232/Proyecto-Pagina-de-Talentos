import React, { useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import TablaUsuariosAdmin from '../components/TablaUsuariosAdmin'
import "../Styles/Admin.css"
import DashboardAdmin from '../components/DashboardAdmin'
import TabladePortafolios from '../components/TabladePortafolios'

const Admin = () => {
    const [vista, setVista] = useState('dashboard')

    return (
        <div style={{display:'flex', flexDirection:'row', height:'100vh', overflow:'hidden', backgroundColor:'#f5f8f8', color:'#0f172a'}}>
            <SidebarAdmin
                mostrandoDashboard={() => setVista('dashboard')}
                mostrandoUsuarios={() => setVista('usuarios')}
                mostrandoPortafolio={() => setVista('portafolio')}
            />

            <main style={{flex:1, overflowY:'auto', backgroundColor:'#f5f8f8', color:'#0f172a'}}>
                {vista === 'usuarios' && <TablaUsuariosAdmin />}
                {vista === 'dashboard' && <DashboardAdmin />}
                {vista === 'portafolio' && <TabladePortafolios />}
            </main>
        </div>
    )
}

export default Admin
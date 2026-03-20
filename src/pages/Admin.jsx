import React, { useState } from 'react'
import SidebarAdmin from '../components/SidebarAdmin'
import TablaUsuariosAdmin from '../components/TablaUsuariosAdmin'
import "../Styles/Admin.css"
import DashboardAdmin from '../components/DashboardAdmin'
import TabladePortafolios from '../components/TabladePortafolios'
const Admin = () => {

    const [mostrandoUsuarios,setMostrandoUsuarios] = useState(false)
    const [mostrandoDashboard,setMostrandoDashboard] = useState(true)
    const [mostrandoPortafolio,setMostrandoPortafolio] = useState(false)
    function mostrarUsuarios(){
        setMostrandoUsuarios(true)
        setMostrandoPortafolio(false)
        setMostrandoDashboard(false)
    }

    function mostrarDashboard() {
        setMostrandoDashboard(true)
        setMostrandoUsuarios(false)
        setMostrandoPortafolio(false)
    }

    function mostrarPortafolio() {
        setMostrandoPortafolio(true)
        setMostrandoUsuarios(false)
        setMostrandoDashboard(false)
    }

    return (
        <div className='cont-pagina-admin'>
            <div className='menu'>
                <SidebarAdmin  mostrandoDashboard={()=>{
                    mostrarDashboard()
                }}  mostrandoUsuarios={()=>{
                    mostrarUsuarios()
                }}
                mostrandoPortafolio={()=>{
                    mostrarPortafolio()
                }}
                />
            </div>

            <main className='main'>
                {mostrandoUsuarios && (
                    <TablaUsuariosAdmin/>
                )}
                {mostrandoDashboard && (
                    <DashboardAdmin/>
                )}

                {mostrandoPortafolio && (
                    <TabladePortafolios/>
                )}
            </main>

        </div>
    )
}

export default Admin
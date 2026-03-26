import React from 'react'
import { useState , useEffect } from 'react'
import Fetch from '../services/Fetch'
const DashboardAdmin = () => {

 const [usuarios, setUsuarios] = useState([]) 
  useEffect(() => {
    async function traerUsuarios() {
      const lista = await Fetch.getData("usuarios")
      setUsuarios(lista);}

traerUsuarios()
  }, [])



  return (
    <div>

<div>
      <h2>Dashboard Admin</h2>
      <h3>Usuarios registrados</h3>
    <p>{usuarios.length} usuarios registrados</p>
</div>







    </div>
  )
}

export default DashboardAdmin
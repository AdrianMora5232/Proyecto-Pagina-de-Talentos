import React from 'react'
import CompPrincipal from '../components/ApartadoPaginaPrincipal/CompPrincipal'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


function Principal() {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <CompPrincipal/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Principal

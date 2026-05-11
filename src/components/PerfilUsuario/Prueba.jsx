import React from 'react'
import { useState } from 'react'
function Prueba() {

    const [imagen, setImagen] = useState(null)

      const manejarCambio = (evento) => {
        const archivo = evento.targen.files[0];
        if (archivo) {
            setImagen(URl.createobjURl(archivo));
        }
      }


  return (
    <div>
<h2>Foto perfil</h2>
<input type="file" accept='imagen/*' onChange={manejarCambio} />


{imagen && (

<image src ={imagen} alt = "Foto de perfil" width= "150" />


)}






    </div>
  )
}

export default Prueba
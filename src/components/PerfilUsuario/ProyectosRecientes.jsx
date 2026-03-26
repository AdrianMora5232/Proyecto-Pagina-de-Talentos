import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css"
import { useState,useEffect } from 'react'
import CardProyecto from './CardProyecto';

function ProyectosRecientes() {
    const [proyectos,setProyectos] = useState([])


    useEffect(()=>{
        async function traerCursos() {
            const peticion = await fetch("http://localhost:3001/portafolios")
            const peticionJson = await peticion.json()
            setProyectos(peticionJson)
        }
        traerCursos()
    },[])

    return (
        <div className='proyectos-container'>

            <div className="proyectos-header">
                <h4>Proyectos Recientes</h4>
                <p>Ver todos</p>
            </div>

            <div className="proyectos-grid">
                {proyectos.map((proyecto)=>(
                    <CardProyecto
                        nombreProyecto={proyecto.titulo}
                        descripcionProyecto={proyecto.descripcion}
                    />
                ))}
            </div>

        </div>
    )
}

export default ProyectosRecientes
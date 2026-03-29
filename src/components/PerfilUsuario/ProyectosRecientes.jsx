import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css"
import { useState, useEffect } from 'react'
import CardProyecto from './CardProyecto';
import { useNavigate } from "react-router-dom";
function ProyectosRecientes() {
    const [proyectos, setProyectos] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        async function traerCursos() {
            const peticion = await fetch("http://localhost:3001/portafolios")
            const peticionJson = await peticion.json()
            const filtroProyectos = peticionJson.filter((proyecto) => proyecto.usuarioId == JSON.parse(localStorage.getItem("UsuarioActivo")).id)
            console.log(filtroProyectos);
            
            setProyectos(filtroProyectos)
        }
        traerCursos()
    }, [])

    return (
        <div className='proyectos-container'>

            <div className="proyectos-header">
                <h4>Proyectos Recientes</h4>
                <p>Ver todos</p>
            </div>

            <div className="proyectos-grid">


                {proyectos.length === 0 && <div>
                    No hay proyectos recientes
                    <button
                        onClick={() => {
                            navigate("/portafolio")
                        }}

                    >Agrega uno acá</button>
                </div>}


                {proyectos.map((proyecto) => (
                    <CardProyecto
                        nombreProyecto={proyecto.titulo}
                        descripcionProyecto={proyecto.descripcion}
                        estructura={proyecto.componentes?.[0]}
                    />
                ))}
            </div>

        </div>
    )
}

export default ProyectosRecientes
import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css"
import { useState, useEffect } from 'react'
import CardProyecto from './CardProyecto';
import ModalProyecto from './ModalProyecto';
import Fetch from '../../services/Fetch';
import { calcularPromedio } from '../../utils/calcularPromedio';
import { useNavigate } from "react-router-dom";

function ProyectosRecientes() {
    const [proyectos, setProyectos] = useState([])
    const [todasResenas, setTodasResenas] = useState([])
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
    const navigate = useNavigate()

    const cargarDatos = async () => {
        try {
            // Fetch Portafolios
            const peticionJson = await Fetch.getData("portafolios")
            const filtroProyectos = peticionJson.filter((proyecto) => proyecto.usuarioId == JSON.parse(localStorage.getItem("UsuarioActivo")).id)
            setProyectos(filtroProyectos)

            // Fetch Todas Las Reseñas
            const resenasJson = await Fetch.getData("resenas") || []
            setTodasResenas(resenasJson)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        cargarDatos()
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

                {proyectos.map((proyecto) => {
                    const resenasProyecto = todasResenas.filter(r => r.portafolioId === proyecto.id)
                    const promedio = calcularPromedio(resenasProyecto)

                    return (
                        <CardProyecto
                            key={proyecto.id}
                            nombreProyecto={proyecto.titulo}
                            descripcionProyecto={proyecto.descripcion}
                            estructura={proyecto.componentes?.[0]}
                            promedio={promedio}
                            onVerProyecto={() => setProyectoSeleccionado(proyecto)}
                        />
                    )
                })}
            </div>

            {/* Modal de visualización */}
            <ModalProyecto 
                proyecto={proyectoSeleccionado} 
                resenas={proyectoSeleccionado ? todasResenas.filter(r => r.portafolioId === proyectoSeleccionado.id) : []}
                onClose={() => setProyectoSeleccionado(null)}
                onReviewAdded={cargarDatos}
            />
        </div>
    )
}

export default ProyectosRecientes
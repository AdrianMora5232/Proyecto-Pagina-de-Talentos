import React, { useState, useEffect } from 'react'
import CompPrincipal from '../components/ApartadoPaginaPrincipal/CompPrincipal'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Fetch from '../services/Fetch'
import '../styles/Principal.css'

function Principal() {
  const [isBuzonOpen, setIsBuzonOpen] = useState(false);
  const [convocatorias, setConvocatorias] = useState([]);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const userString = localStorage.getItem("UsuarioActivo");
        const user = userString ? JSON.parse(userString) : null;
        
        // Cargamos todas las convocatorias y todas las respuestas
        const [todasConvocatorias, todasRespuestas] = await Promise.all([
          Fetch.getData("convocatorias"),
          Fetch.getData("respuestas_convocatorias")
        ]);

        if (user) {
          // Filtramos las convocatorias: solo mostrar aquellas que el usuario actual NO ha respondido
          const filtradas = (todasConvocatorias || []).filter(conv => {
            const yaRespondio = (todasRespuestas || []).some(resp => 
              resp.idConvocatoria === conv.id && resp.usuarioNombre === user.Nombre
            );
            return !yaRespondio;
          });
          setConvocatorias(filtradas);
        } else {
          setConvocatorias(todasConvocatorias || []);
        }
      } catch (error) {
        console.error("Error al cargar datos del buzón:", error)
      }
    }
    cargarDatos()
  }, []);

  const handleParticipar = async (id) => {
    try {
      const userString = localStorage.getItem("UsuarioActivo");
      const user = userString ? JSON.parse(userString) : { Nombre: "Usuario desconocido" };
      
      const convocatoria = convocatorias.find(c => c.id === id);
      const conNombre = convocatoria ? convocatoria.nombre : "Convocatoria desconocida";

      const respuestaObj = {
        idConvocatoria: id, // Guardamos el ID para filtrar después
        usuarioNombre: user.Nombre,
        convocatoriaNombre: conNombre,
        respuesta: "Participar",
        fecha: new Date().toLocaleString()
      };

      // Guardamos la respuesta en el servidor
      await Fetch.postData(respuestaObj, "respuestas_convocatorias");

      // YA NO BORRAMOS DE "convocatorias" GLOBALMENTE
      // Solo actualizamos el estado local para que desaparezca del buzón de este usuario
      alert("¡Genial! Has decidido participar en esta convocatoria.");
      setConvocatorias(prev => prev.filter(c => c.id !== id));
      
    } catch (error) {
      console.error("Error al participar:", error)
    }
  }

  const handleNoParticipar = async (id) => {
    try {
      const userString = localStorage.getItem("UsuarioActivo");
      const user = userString ? JSON.parse(userString) : { Nombre: "Usuario desconocido" };
      
      const convocatoria = convocatorias.find(c => c.id === id);
      const conNombre = convocatoria ? convocatoria.nombre : "Convocatoria desconocida";

      const respuestaObj = {
        idConvocatoria: id,
        usuarioNombre: user.Nombre,
        convocatoriaNombre: conNombre,
        respuesta: "No participar",
        fecha: new Date().toLocaleString()
      };

      await Fetch.postData(respuestaObj, "respuestas_convocatorias");

      // Solo actualizamos el estado local
      setConvocatorias(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error("Error al rechazar:", error)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div>
        <Navbar />
      </div>
      <div>
        <CompPrincipal />
      </div>
      <div>
        <Footer />
      </div>

      {/* Elementos del Buzón al final para asegurar prioridad de clic */}
      <button className='ButtonBuzonTop' onClick={() => setIsBuzonOpen(!isBuzonOpen)}>
        <span>📥</span>
        Buzón
        {convocatorias.length > 0 && <span className="buzon-badge-top">{convocatorias.length}</span>}
      </button>

      {isBuzonOpen && (
        <div className="notification-panel">
          <div className="notif-header">
            <h5>Notificaciones</h5>
            <button className="notif-close" onClick={() => setIsBuzonOpen(false)}>&times;</button>
          </div>
          <div className="notif-body">
            {convocatorias.length === 0 ? (
              <p className="notif-empty">No hay mensajes nuevos.</p>
            ) : (
              convocatorias.map(convocatoria => (
                <div key={convocatoria.id} className="notif-item">
                  <strong>{convocatoria.nombre}</strong>
                  <p>{convocatoria.descripcion}</p>
                  <div className="notif-actions">
                    <button className="notif-btn-accept" onClick={() => handleParticipar(convocatoria.id)}>Participar</button>
                    <button className="notif-btn-decline" onClick={() => handleNoParticipar(convocatoria.id)}>No</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Principal

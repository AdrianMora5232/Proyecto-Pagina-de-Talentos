import "../../styles/EstilosPerfilUsuario/ModalProyecto.css";
import React, { useState, useEffect } from "react";
import Lienzo from "../PlantillaTalentos/Lienzo";
import Estructura1 from "../PlantillaTalentos/Estructura1";
import Estructura1_1 from "../PlantillaTalentos/Estructura1_1";
import Estructura1_2 from "../PlantillaTalentos/Estructura1_2";
import Estructura1_3 from "../PlantillaTalentos/Estructura1_3";
import Estructura1_4 from "../PlantillaTalentos/Estructura1_4";
import GrillaDoble from "../PlantillaTalentos/GrillaDoble";
import GrillaTriple from "../PlantillaTalentos/GrillaTriple";
import Grilla1_2_Izda from "../PlantillaTalentos/Grilla1_2_Izda";
import Grilla1_2_Derecha from "../PlantillaTalentos/Grilla1_2_Derecha";
import Fetch from "../../services/Fetch";
import { calcularPromedio } from "../../utils/calcularPromedio";

const CONTENEDORES = {
  Estructura1,
  Estructura1_1,
  Estructura1_2,
  Estructura1_3,
  Estructura1_4,
  GrillaDoble,
  GrillaTriple,
  Grilla1_2_Izda,
  Grilla1_2_Derecha
};

function ModalProyecto({ proyecto, resenas = [], onClose, onReviewAdded }) {
  const [nuevaResena, setNuevaResena] = useState({ comentario: "", rating: 5 });
  const [loading, setLoading] = useState(false);

  // Cerrar presionando Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!proyecto) return null;

  const handleEnviarResena = async () => {
    if (!nuevaResena.comentario.trim()) return;

    let usuario = {};
    try {
      usuario = JSON.parse(localStorage.getItem("UsuarioActivo")) || {};
    } catch (e) {
      console.error(e);
    }

    const dataPost = {
      usuarioId: usuario.id || "desconocido",
      portafolioId: proyecto.id,
      comentario: nuevaResena.comentario,
      rating: nuevaResena.rating,
      fecha: new Date().toISOString()
    };

    setLoading(true);
    try {
      await Fetch.postData(dataPost, "resenas");
      if (onReviewAdded) await onReviewAdded();
      setNuevaResena({ comentario: "", rating: 5 });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  // Renderizar todos los componentes del portafolio alineados
  const renderComponentesTooltip = () => {
    if (!proyecto.componentes) return null;
    return proyecto.componentes.map((compName, index) => {
      const Comp = CONTENEDORES[compName];
      return Comp ? <Comp key={index} /> : null;
    });
  };

  const promedio = calcularPromedio(resenas);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-split">
          {/* IZQUIERDA: Render Completo */}
          <div className="modal-left">
            <div className="lienzo-modal-container">
              {/* Le damos una escala reducida para que encaje el equivalente a la vista Desktop dentro de esta columna */}
              <div style={{ transform: 'scale(0.8)', transformOrigin: 'top center', width: '125%', pointerEvents: 'none' }}>
                <Lienzo
                  tituloProyecto={proyecto.titulo}
                  descripcionProyecto={proyecto.descripcion}
                  childrenEstructura={<>{renderComponentesTooltip()}</>}
                />
              </div>
            </div>
          </div>

          {/* DERECHA: Reseñas */}
          <div className="modal-right">
            <h3>Reseñas evaluativas <span style={{fontSize:'16px', color:'#f39c12'}}>★ {promedio}</span></h3>
            <div className="resenas-lista">
              {resenas.length === 0 ? (
                <p style={{ color: '#777', fontStyle: 'italic' }}>
                  Este proyecto aún no tiene reseñas. ¡Sé el primero en comentar!
                </p>
              ) : (
                resenas.map((r, i) => (
                  <div key={i} className="resena-item">
                    <div className="resena-stars">
                      {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                    </div>
                    <p style={{fontSize: '12px', color: '#888', marginBottom: '5px'}}>
                      Usuario: {r.usuarioId} - Fecha: {new Date(r.fecha).toLocaleDateString()}
                    </p>
                    <p>{r.comentario}</p>
                  </div>
                ))
              )}
            </div>
            
            {/* Formulario de Reseña */}
            <div className="resena-form">
              <h4>Dejar reseña</h4>
              <select 
                value={nuevaResena.rating} 
                onChange={e => setNuevaResena({...nuevaResena, rating: Number(e.target.value)})}
                disabled={loading}
              >
                <option value={5}>5 Estrellas (Excelente)</option>
                <option value={4}>4 Estrellas (Muy Bueno)</option>
                <option value={3}>3 Estrellas (Promedio)</option>
                <option value={2}>2 Estrellas (Deficiente)</option>
                <option value={1}>1 Estrella (Malo)</option>
              </select>
              <textarea 
                placeholder="Escribe tu comentario sobre este proyecto..." 
                value={nuevaResena.comentario}
                onChange={e => setNuevaResena({...nuevaResena, comentario: e.target.value})}
                disabled={loading}
              />
              <button disabled={loading || !nuevaResena.comentario.trim()} onClick={handleEnviarResena}>
                {loading ? "Enviando..." : "Enviar Reseña"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProyecto;

import "../../styles/EstilosPerfilUsuario/ResenasUsuario.css";
import { useEffect, useState, useMemo } from "react";
import Fetch from "../../services/Fetch";
import { calcularPromedio } from "../../utils/calcularPromedio";

function ResenasUsuario() {
  const [resenas, setResenas] = useState([]);

  useEffect(() => {
    async function fetchResenas() {
      try {
        const usuario = JSON.parse(localStorage.getItem("UsuarioActivo"));
        const data = await Fetch.getData("resenas");

        const filtradas = data.filter(
          (r) => String(r.usuarioId) === String(usuario.id)
        );

        setResenas(filtradas);
      } catch (error) {
        console.error(error);
      }
    }

    fetchResenas();
  }, []);

  const promedio = calcularPromedio(resenas);

  // Conteo por estrellas
  const distribucion = useMemo(() => {
    const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    resenas.forEach((r) => dist[r.rating]++);
    return dist;
  }, [resenas]);

  const total = resenas.length || 1;

  return (
    <div className="resenas-container">

      {/* IZQUIERDA */}
      <div className="resenas-score">
        <h2>{promedio}</h2>
        <p>Promedio de {resenas.length} valoraciones</p>

        {[5,4,3,2,1].map((star) => (
          <div key={star} className="barra">
            <span>{star}</span>
            <div className="barra-bg">
              <div
                className="barra-fill"
                style={{
                  width: `${(distribucion[star] / total) * 100}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* DERECHA */}
      <div className="resenas-list">
        <h4>Reseñas de Clientes</h4>

        {resenas.map((r, i) => (
          <div key={i} className="resena-card">
            <div className="resena-stars">
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>

            <p className="resena-text">{r.comentario}</p>

            <span className="resena-user">
              Usuario #{r.usuarioId}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ResenasUsuario;
import "../../styles/PlantillaTalentos/Estructura1.css";
import { useEditable } from "./useEditable";
import { useState, useEffect } from "react";

function Estructura1({ onActivate, activeElement, initialData, onUpdate }) {

  const fondo = useEditable(initialData, onUpdate);

  const [loadingFondo, setLoadingFondo] = useState(false);
  const [loadingChild, setLoadingChild] = useState(false);

  useEffect(() => {
    if (fondo.state.imageUrl) {
      setLoadingFondo(true);
      const img = new Image();
      img.onload = () => setLoadingFondo(false);
      img.onerror = () => setLoadingFondo(false);
      img.src = fondo.state.imageUrl;
    } else {
      setLoadingFondo(false);
    }
  }, [fondo.state.imageUrl]);

  useEffect(() => {
    if (fondo.state.childImageUrl) {
      setLoadingChild(true);
      const img = new Image();
      img.onload = () => setLoadingChild(false);
      img.onerror = () => setLoadingChild(false);
      img.src = fondo.state.childImageUrl;
    } else {
      setLoadingChild(false);
    }
  }, [fondo.state.childImageUrl]);

  return (
    <div
      className="est1"
      style={{
        backgroundColor: fondo.state.colorFondo,
        backgroundImage: fondo.state.imageUrl && !loadingFondo
          ? `url(${fondo.state.imageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",

        outline: activeElement?.id === fondo.state.id
          ? "2px solid #3b82f6"
          : "none",
        boxShadow: activeElement?.id === fondo.state.id
          ? "0 0 0 4px rgba(59,130,246,0.2)"
          : "none"
      }}
      onClick={(e) => {
        e.stopPropagation();

        onActivate(e, {
          id: fondo.state.id,
          tipo: "fondo",
          setColorFondo: (color) =>
            fondo.update({ colorFondo: color }),
          setImageUrl: (url) =>
            fondo.update({ imageUrl: url }),
          imageUrl: fondo.state.imageUrl
        });
      }}
    >

      {loadingFondo && (
        <div className="loading-overlay-fondo">
          <div className="spinner"></div>
        </div>
      )}

      <div
        className="est1__child"
        style={{
          width: "100%",
          backgroundColor: fondo.state.childColorFondo,
          backgroundImage: fondo.state.childImageUrl && !loadingChild
            ? `url(${fondo.state.childImageUrl})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "10px",
          borderRadius: "8px",
          position: "relative"
        }}
        onClick={(e) => {
          e.stopPropagation();

          onActivate(e, {
            id: fondo.state.id,
            tipo: "fondo",
            setColorFondo: (color) =>
              fondo.update({ childColorFondo: color }),
            setImageUrl: (url) =>
              fondo.update({ childImageUrl: url }),
            imageUrl: fondo.state.childImageUrl
          });
        }}
      >

        {loadingChild && (
          <div className="loading-overlay-child">
            <div className="spinner"></div>
          </div>
        )}
        <input
          className="est1__title input-titulo"
          placeholder="Escribe un titulo"
          value={fondo.state.texto}
          onChange={(e) =>
            fondo.update({ texto: e.target.value })
          }
          style={{
            color: fondo.state.colorTexto,
            background: "transparent"
          }}
          onClick={(e) => {
            e.stopPropagation();

            // Click en el texto si no debe cambiar color de texto
            onActivate(e, {
              id: fondo.state.id,
              tipo: "fondo",
              setColorFondo: (color) =>
                fondo.update({ childColorFondo: color }),
              setImageUrl: (url) =>
                fondo.update({ childImageUrl: url }),
              imageUrl: fondo.state.childImageUrl
            });
          }}
          onDoubleClick={(e) => {
            e.stopPropagation();

            onActivate(e, {
              id: fondo.state.id,
              tipo: "texto",
              setColorTexto: (color) => fondo.update({ colorTexto: color })
            });
          }}
        />
      </div>

    </div>
  );
}

export default Estructura1;
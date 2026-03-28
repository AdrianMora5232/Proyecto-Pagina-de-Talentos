import "../../styles/PlantillaTalentos/Estructura1.css";
import { useEditable } from "./useEditable";

function Estructura1({ onActivate, activeElement }) {

  const fondo = useEditable();

  return (
    <div
      className="est1"
      style={{
        backgroundColor: fondo.state.colorFondo,
        backgroundImage: fondo.state.imageUrl
          ? `url(${fondo.state.imageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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

      <input
        className="est1__title input-titulo"
        placeholder="Escribe un titulo"
        value={fondo.state.texto}
        onChange={(e) =>
          fondo.update({ texto: e.target.value })
        }
        style={{
          color: fondo.state.colorTexto
        }}
        onClick={(e) => {
          e.stopPropagation();

          onActivate(e, {
            id: fondo.state.id,

            tipo: "texto",

            setColorTexto: (color) =>
              fondo.update({ colorTexto: color })
          });
        }}
      />

    </div>
  );
}

export default Estructura1;
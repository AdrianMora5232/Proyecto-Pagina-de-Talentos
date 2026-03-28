import "../../styles/PlantillaTalentos/Estructura1_1.css";
import EditableBlock from "./EditableBlock";
import { useEditable } from "./useEditable";

function Estructura1_1({ onActivate, activeElement }) {

  const fondo = useEditable();
  const bloque = useEditable();

  return (
    <div
      className="est1_1"
      style={{
        backgroundColor: fondo.state.colorFondo,
        backgroundImage: fondo.state.imageUrl
          ? `url(${fondo.state.imageUrl})`
          : "none",

        outline: activeElement?.id === fondo.state.id
          ? "2px solid #3b82f6"
          : "none"
      }}
      onClick={(e) => {
        e.stopPropagation();

        onActivate(e, {
          id: fondo.state.id,
          tipo: "fondo",
          setColorFondo: (c) => fondo.update({ colorFondo: c }),
          setImageUrl: (u) => fondo.update({ imageUrl: u }),
          imageUrl: fondo.state.imageUrl
        });
      }}
    >

      <div className="est1_1__content">

        <EditableBlock
          className="est1_1__title"
          data={bloque.state}
          update={bloque.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="est1_1__description"
          data={bloque.state}
          update={bloque.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

      </div>
    </div>
  );
}

export default Estructura1_1;
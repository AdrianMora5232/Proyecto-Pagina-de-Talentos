import "../../styles/PlantillaTalentos/Estructura1_4.css";
import EditableBlock from "./EditableBlock";
import { useEditable } from "./useEditable";
import { useState, useEffect } from "react";

function Estructura1_4({ onActivate, activeElement }) {

  const fondo = useEditable();
  const bloqueTop = useEditable();
  const bloqueMid1 = useEditable();
  const bloqueMid2 = useEditable();
  const bloqueBottom1 = useEditable();
  const bloqueBottom2 = useEditable();
  const bloqueBottom3 = useEditable();

  const [loadingFondo, setLoadingFondo] = useState(false);

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

  return (
    <div
      className="est1_4"
      style={{
        backgroundColor: fondo.state.colorFondo,
        backgroundImage: fondo.state.imageUrl && !loadingFondo
          ? `url(${fondo.state.imageUrl})`
          : "none",
        outline:
          activeElement?.id === fondo.state.id ? "2px solid #3b82f6" : "none"
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

      {loadingFondo && (
        <div className="loading-overlay-fondo">
          <div className="spinner"></div>
        </div>
      )}

      <div className="est1_4__content">

        <EditableBlock
          className="est1_4__title"
          data={bloqueTop.state}
          update={bloqueTop.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="est1_4__description"
          data={bloqueMid1.state}
          update={bloqueMid1.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="est1_4__description"
          data={bloqueMid2.state}
          update={bloqueMid2.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="est1_4__description"
          data={bloqueBottom1.state}
          update={bloqueBottom1.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="est1_4__description"
          data={bloqueBottom2.state}
          update={bloqueBottom2.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="est1_4__description"
          data={bloqueBottom3.state}
          update={bloqueBottom3.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

      </div>
    </div>
  );
}

export default Estructura1_4;
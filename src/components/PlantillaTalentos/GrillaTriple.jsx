import "../../styles/PlantillaTalentos/GrillaTriple.css";
import EditableBlock from "./EditableBlock";
import { useEditable } from "./useEditable";
import { useState, useEffect } from "react";

function GrillaTriple({ onActivate, activeElement }) {

  const fondo = useEditable();
  const bloque1 = useEditable();
  const bloque2 = useEditable();
  const bloque3 = useEditable();

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
    <>
      <div
        className="grillaTriple__grid"
        style={{
          backgroundColor: fondo.state.colorFondo,
          backgroundImage: fondo.state.imageUrl && !loadingFondo
            ? `url(${fondo.state.imageUrl})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          outline: activeElement?.id === fondo.state.id ? "2px solid #3b82f6" : "none"
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

        <EditableBlock
          className="grillaTriple__image"
          data={bloque1.state}
          update={bloque1.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="grillaTriple__image"
          data={bloque2.state}
          update={bloque2.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

        <EditableBlock
          className="grillaTriple__image"
          data={bloque3.state}
          update={bloque3.update}
          onActivate={onActivate}
          activeElement={activeElement}
        />

      </div>
    </>
  );
}
export default GrillaTriple;
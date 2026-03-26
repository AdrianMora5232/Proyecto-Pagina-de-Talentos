import "../../styles/PlantillaTalentos/Estructura1.css";
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";
import { useState } from "react";
function Estructura1() {
  const { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl } = useEstilos();
  const [visible, setVisible] = useState(false);
  return (
    <div
      onClick={() => setVisible(!visible)}  
      className="est1"
      style={{
        backgroundColor: colorFondo,
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <EditorContenedores
        visible={visible}
        setColorFondo={setColorFondo}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        setColorTexto={setColorTexto}
      />

      <input
        className="est1__title input-titulo"
        placeholder="Escribe un titulo"
        style={{ color: colorTexto }}
      />
    </div>
  );
}

export default Estructura1;
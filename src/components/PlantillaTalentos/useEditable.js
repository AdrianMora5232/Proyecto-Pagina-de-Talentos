import { useState, useRef } from "react";

let globalId = 0;

export function useEditable() {
  const idRef = useRef(`editable-${globalId++}`);

  const [state, setState] = useState({
    id: idRef.current,
    texto: "",
    colorTexto: "#000",
    colorFondo: "#ffffff",
    imageUrl: ""
  });

  const update = (newData) => {
    setState((prev) => ({
      ...prev,
      ...newData
    }));
  };

  return { state, update };
}
import { useState, useRef, useEffect } from "react";

let globalId = 0;

export function useEditable(initialState = null, onUpdate = null) {
  const idRef = useRef(`editable-${globalId++}`);

  const [state, setState] = useState(initialState || {
    id: idRef.current,
    texto: "",
    colorTexto: "#1a202c",
    colorFondo: "",
    imageUrl: ""
  });

  // Sincronizar si initialState cambia (importante para las previsualizaciones dinámicas)
  useEffect(() => {
    if (initialState) {
      setState(initialState);
    }
  }, [initialState]);

  const update = (newData) => {
    const newState = {
      ...state,
      ...newData
    };
    setState(newState);
    if (onUpdate) onUpdate(newState);
  };

  return { state, update };
}
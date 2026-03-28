import { useState } from "react";

export const useEditable = () => {
    const [state, setState] = useState({
        id: crypto.randomUUID(),
        colorFondo: "",
        colorTexto: "#000",
        imageUrl: "",
        texto: "",
        fontSize: 16,
        bold: false,
        italic: false,
        align: "left"
    });

    const update = (changes) => {
        setState((prev) => ({ ...prev, ...changes }));
    };

    return {
        state,
        update
    };
};


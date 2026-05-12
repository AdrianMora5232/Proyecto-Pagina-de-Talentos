import { useState } from "react";

export function useEstilos() {
    const [colorFondo, setColorFondo] = useState("white");
    const [colorTexto, setColorTexto] = useState("black");
    const [imageUrl, setImageUrl] = useState("");

    return { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl };
}

import "../../styles/PlantillaTalentos/Estructura1_1.css"
import { useState } from "react";
//import { useImage } from "./HookImagenCloudinary";
import UploadImage from "./SubirImagen";

function Estructura1_1() {
    const [colorFondo, setColorFondo] = useState("white");
    const [colorTexto, setColorTexto] = useState("black");

    //const { imageUrl, setImageUrl } = useImage();
    const [imageUrl, setImageUrl] = useState("");

    return (
        <>
            <div
                className="contenedor-estructura-1-1"
                style={{
                    backgroundColor: colorFondo,
                    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <span className="color-wrapper">
                    <input
                        className="btnColor"
                        type="color"
                        onChange={(e) => setColorFondo(e.target.value)}
                    />
                    <span className="icono">
                        <i className="fa-solid fa-palette"></i>
                    </span>
                </span>


                <span className="image-wrapper">
                    <UploadImage setImageUrl={setImageUrl} />
                    <span className="icono-img"><i className="fa-regular fa-file-image"></i></span>
                </span>

                {imageUrl && (
                    <span
                        className="remove-img"
                        onClick={() => setImageUrl("")}
                    >
                        ❌
                    </span>
                )}

                <span className="text-color-wrapper">
                    <input
                        type="color"
                        className="btnTextColor"
                        onChange={(e) => setColorTexto(e.target.value)}
                    />
                    <span className="icono-texto"><i className="fa-solid fa-brush"></i>  <i className="fa-solid fa-font"></i></span>
                </span>

                <div className="contenedor-titulo-textbox-1-1">
                    <input
                        className="header-estructura-1-1 input-titulo"
                        placeholder="Escribe un titulo"
                        style={{ color: colorTexto }}
                    />

                    <textarea
                        className="textbox-estructura-1-1 input-textbox"
                        placeholder="Escribe un texto"
                        style={{ color: colorTexto }}
                    />
                </div>
            </div>

        </>
    )
}
export default Estructura1_1;
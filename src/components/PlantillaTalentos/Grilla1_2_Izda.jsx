import "../../styles/PlantillaTalentos/Grilla1_2_Izda.css";
import { useState } from "react";
//import { useImage } from "./HookImagenCloudinary";
import UploadImage from "./SubirImagen";

function Grilla1_2_Izda() {
    const [colorFondo, setColorFondo] = useState("white");
    const [colorTexto, setColorTexto] = useState("black");

    //const { imageUrl, setImageUrl } = useImage();
    const [imageUrl, setImageUrl] = useState("");

    return (
        <>
            <div class="grid">
                <div class="left"
                    className="ImageBlock-grilla1_2_izda"
                    style={{
                        backgroundColor: colorFondo,
                        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
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
                </div>
                <div className="contenedor-titulo-textbox-grilla1_2_izda">
                    <input
                        className="header-grilla1_2_izda input-titulo"
                        placeholder="Escribe un titulo"
                        style={{ color: colorTexto }}
                    />

                    <textarea
                        className="textbox-grilla1_2_izda input-textbox"
                        placeholder="Escribe un texto"
                        style={{ color: colorTexto }}
                    />
                </div>
            </div>

        </>
    )
}
export default Grilla1_2_Izda;
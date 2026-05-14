import React from 'react';
import "../../styles/PlantillaTalentos/EditorContenedores.css"
import UploadImage from "./SubirImagen";

function EditorContenedores({ tipo, setColorFondo, setImageUrl, imageUrl, setColorTexto, position }) {
    return (
        <>

            <div className="editor-toolbar"
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: "fixed",
                    top: position.y,
                    left: position.x,
                    transform: "translate(-50%, -100%)",
                    zIndex: 9999
                }}
            >

                {tipo === "fondo" && (
                    <>
                        <span className="color-wrapper">
                            <input
                                className="btnColor"
                                type="color"
                                onChange={(e) => setColorFondo(e.target.value)}
                            />
                            <i className="fa-solid fa-palette"></i>
                        </span>

                        <span className="image-wrapper">
                            <UploadImage setImageUrl={setImageUrl} />
                        </span>

                        {imageUrl && (
                            <span
                                className="remove-img"
                                onClick={() => setImageUrl("")}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        )}
                    </>
                )}

                {tipo === "bloque" && (

                    <>
                        <span className="color-wrapper">
                            <input
                                className="btnColor"
                                type="color"
                                onChange={(e) => setColorFondo(e.target.value)}
                            />
                            <i className="fa-solid fa-palette"></i>
                        </span>

                        <span className="image-wrapper">
                            <UploadImage setImageUrl={setImageUrl} />
                        </span>

                        {imageUrl && (
                            <span
                                className="remove-img"
                                onClick={() => setImageUrl("")}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        )}
                    </>
                )}

                {tipo === "texto" && (

                    <span className="text-color-wrapper">
                        <input
                            type="color"
                            className="btnTextColor"
                            onChange={(e) => setColorTexto(e.target.value)}
                        />
                        <span className="icono-texto">
                            <i className="fa-solid fa-brush"></i>
                            <i className="fa-solid fa-font"></i>
                        </span>
                    </span>

                )}
            </div>

        </>

    )
}

export default EditorContenedores;
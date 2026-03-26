import React from 'react';
import "../../styles/PlantillaTalentos/EditorContenedores.css"
import UploadImage from "./SubirImagen";

function EditorContenedores({ setColorFondo, setImageUrl, imageUrl, setColorTexto, visible }) {
    return (
        <>
            {visible && (
                <div className="editor-toolbar"
                onClick={(e) => e.stopPropagation()}>
                    
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
                        <span className="icono-img">
                            <i className="fa-regular fa-file-image"></i>
                        </span>
                    </span>

                    {imageUrl && (
                        <span
                            className="remove-img"
                            onClick={() => setImageUrl("")}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    )}

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
                </div>
            )}
        </>
    )
}

export default EditorContenedores;
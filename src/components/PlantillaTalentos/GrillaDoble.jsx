import "../../styles/PlantillaTalentos/GrillaDoble.css";
import EditorContenedores from "./EditorContenedores";
import EditableBlock from "./EditableBlock";
import { useEditable } from "./useEditable";
import { useEstilos } from "./useEstilos";
import { useState } from "react";

function GrillaDoble({ onActivate }) {

    const fondo = useEditable();

    const bloque1 = useEditable();
    const bloque2 = useEditable();

    return (
        <div className="grillaDoble__grid"
            style={{
                backgroundColor: fondo.state.colorFondo,
                backgroundImage: fondo.state.imageUrl
                    ? `url(${fondo.state.imageUrl})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            onClick={(e) => {
                e.stopPropagation();

                onActivate(e, {

                    id: "grillaDoble-fondo",
                    
                    tipo: "fondo",

                    setColorFondo: (color) =>
                        fondo.update({ colorFondo: color }),

                    setImageUrl: (url) =>
                        fondo.update({ imageUrl: url }),

                    imageUrl: fondo.state.imageUrl   
                });
            }}
        >

            <EditableBlock
                className="grillaDoble__image"
                data={bloque1.state}
                update={bloque1.update}
                onActivate={onActivate}
            />

            <EditableBlock
                className="grillaDoble__image"
                data={bloque2.state}
                update={bloque2.update}
                onActivate={onActivate}
            />

        </div>
    );
}
export default GrillaDoble;
import "../../styles/PlantillaTalentos/Estructura1_3.css"
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";

function Estructura1_3() {
    const { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl } = useEstilos();

    return (
        <div
            className="est1_3"
            style={{
                backgroundColor: colorFondo,
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <EditorContenedores
                setColorFondo={setColorFondo}
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
                setColorTexto={setColorTexto}
            />

            <div className="est1_3__content">
                <input
                    className="est1_3__title input-titulo"
                    placeholder="Escribe un titulo"
                    style={{ color: colorTexto }}
                />

                <textarea
                    className="est1_3__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
                <textarea
                    className="est1_3__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
                <textarea
                    className="est1_3__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
            </div>



        </div>
    )
}
export default Estructura1_3;
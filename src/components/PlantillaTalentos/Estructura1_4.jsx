import "../../styles/PlantillaTalentos/Estructura1_4.css"
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";

function Estructura1_4() {
    const { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl } = useEstilos();

    return (
        <div
            className="est1_4"
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

            <div className="est1_4__content">
                <input
                    className="est1_4__title input-titulo"
                    placeholder="Escribe un titulo"
                    style={{ color: colorTexto }}
                />

                <textarea
                    className="est1_4__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
                <textarea
                    className="est1_4__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
                <textarea
                    className="est1_4__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
                <textarea
                    className="est1_4__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
            </div>



        </div>
    )
}
export default Estructura1_4;
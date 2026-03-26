import "../../styles/PlantillaTalentos/Estructura1_1.css"
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";

function Estructura1_1() {
    const { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl } = useEstilos();

    return (
        <>
            <div
                className="est1_1"
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

                <div className="est1_1__content">
                    <input
                        className="est1_1__title input-titulo"
                        placeholder="Escribe un titulo"
                        style={{ color: colorTexto }}
                    />

                    <textarea
                        className="est1_1__description input-textbox"
                        placeholder="Escribe un texto"
                        style={{ color: colorTexto }}
                    />
                </div>
            </div>

        </>
    )
}
export default Estructura1_1;
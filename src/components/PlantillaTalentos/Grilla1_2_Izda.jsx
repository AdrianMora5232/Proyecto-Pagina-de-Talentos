import "../../styles/PlantillaTalentos/Grilla1_2_Izda.css";
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";

function Grilla1_2_Izda() {
    const { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl } = useEstilos();

    return (
        <>
            <div className="grilla1_2_izda__grid">
                <div
                    className="grilla1_2_izda__image"
                    style={{
                        backgroundColor: colorFondo,
                        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <EditorContenedores
                        setColorFondo={setColorFondo}
                        setImageUrl={setImageUrl}
                        imageUrl={imageUrl}
                        setColorTexto={setColorTexto}
                    />
                </div>
                <div className="grilla1_2_izda__content">
                    <input
                        className="grilla1_2_izda__title input-titulo"
                        placeholder="Escribe un titulo"
                        style={{ color: colorTexto }}
                    />

                    <textarea
                        className="grilla1_2_izda__description input-textbox"
                        placeholder="Escribe un texto"
                        style={{ color: colorTexto }}
                    />
                </div>
            </div>

        </>
    )
}
export default Grilla1_2_Izda;
import "../../styles/PlantillaTalentos/Grilla1_2Derecha.css";
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";

function Grilla1_2_Derecha() {
    const { colorFondo, setColorFondo, colorTexto, setColorTexto, imageUrl, setImageUrl } = useEstilos();

    return (
        <>
            <div className="grilla1_2_derecha__grid">

                <div className="grilla1_2_derecha__content">
                    <input
                        className="grilla1_2_derecha__title input-titulo"
                        placeholder="Escribe un titulo"
                        style={{ color: colorTexto }}
                    />

                    <textarea
                        className="grilla1_2_derecha__description input-textbox"
                        placeholder="Escribe un texto"
                        style={{ color: colorTexto }}
                    />
                </div>
                <div className="grilla1_2_derecha__image"
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
            </div>

        </>
    )
}
export default Grilla1_2_Derecha;
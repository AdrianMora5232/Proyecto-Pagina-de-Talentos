import "../../styles/PlantillaTalentos/GrillaDoble.css";
import EditorContenedores from "./EditorContenedores";
import { useEstilos } from "./useEstilos";
import { useState } from "react";
function GrillaDoble() {
    const [bloque1, setBloque1] = useState({
        colorFondo: "",
        colorTexto: "",
        imageUrl: ""
    });

    const [bloque2, setBloque2] = useState({
        colorFondo: "",
        colorTexto: "",
        imageUrl: ""
    });

    const [active, setActive] = useState(null);

    return (
        <>
            <div className="grillaDoble__grid">

                <div className="grillaDoble__image"
                    onClick={() => setActive(1)}
                    style={{
                        backgroundColor: bloque1.colorFondo,
                        backgroundImage: bloque1.imageUrl ? `url(${bloque1.imageUrl})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: bloque1.colorTexto
                    }}
                >
                    <EditorContenedores
                        visible={active === 1}
                        setColorFondo={(color) =>
                            setBloque1({ ...bloque1, colorFondo: color })
                        }
                        setImageUrl={(url) =>
                            setBloque1({ ...bloque1, imageUrl: url })
                        }
                        setColorTexto={(color) =>
                            setBloque1({ ...bloque1, colorTexto: color })
                        }
                        imageUrl={bloque1.imageUrl}
                    />
                </div>

                <div className="grillaDoble__image"
                    onClick={() => setActive(2)}
                    style={{
                        backgroundColor: bloque2.colorFondo,
                        backgroundImage: bloque2.imageUrl ? `url(${bloque2.imageUrl})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: bloque2.colorTexto
                    }}
                >
                    <EditorContenedores
                        visible={active === 2}
                        setColorFondo={(color) =>
                            setBloque2({ ...bloque2, colorFondo: color })
                        }
                        setImageUrl={(url) =>
                            setBloque2({ ...bloque2, imageUrl: url })
                        }
                        setColorTexto={(color) =>
                            setBloque2({ ...bloque2, colorTexto: color })
                        }
                        imageUrl={bloque2.imageUrl}
                    />
                </div>
            </div>

        </>
    )
}
export default GrillaDoble;
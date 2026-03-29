import NavBarEditor from "../components/PlantillaTalentos/NavBarEditor";
import Lienzo from "../components/PlantillaTalentos/Lienzo";
import EditorContenedores from "../components/PlantillaTalentos/EditorContenedores";
import Estructura1 from "../components/PlantillaTalentos/Estructura1";
import Estructura1_1 from "../components/PlantillaTalentos/Estructura1_1";
import Estructura1_2 from "../components/PlantillaTalentos/Estructura1_2";
import Estructura1_3 from "../components/PlantillaTalentos/Estructura1_3";
import Estructura1_4 from "../components/PlantillaTalentos/Estructura1_4";
import GrillaDoble from "../components/PlantillaTalentos/GrillaDoble";
import GrillaTriple from "../components/PlantillaTalentos/GrillaTriple";
import Grilla1_2_Izda from "../components/PlantillaTalentos/Grilla1_2_Izda";
import Grilla1_2_Derecha from "../components/PlantillaTalentos/Grilla1_2_Derecha";
import SidebarTalentos from "../components/PlantillaTalentos/SidebarTalentos";

import "../styles/PlantillaTalentos/Portafolio.css";

import { useState, useEffect, useRef } from "react";
import { ImageProvider } from "../components/PlantillaTalentos/HookImagenCloudinary";
import Fetch from "../services/Fetch";
import { generarPDFBlob } from "../extras/pdfPortafolio";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";


const Portafolio = () => {
    const [componentes, setComponentes] = useState([]);
    const [tituloProyecto, setTituloProyecto] = useState("");
    const [descripcionProyecto, setDescripcionProyecto] = useState("");

    const [activeElement, setActiveElement] = useState(null);
    const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
    const [showPreviewModal, setShowPreviewModal] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const activarEditor = (e, data) => {
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();

        setActiveElement({
            ...data,
            id: data.id
        });

        setToolbarPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 10 // 👈 arriba del elemento
        });
    };

    const lienzoRef = useRef();

    const handlePreview = () => {
        html2canvas(lienzoRef.current, { useCORS: true, allowTaint: true }).then(canvas => {
            setPreviewImage(canvas.toDataURL());
            setShowPreviewModal(true);
        });
    };

    const closePreview = () => {
        setShowPreviewModal(false);
        setPreviewImage(null);
    };

    const toggleComponente = (nombre) => {
        setComponentes((prev) => {
            if (prev.includes(nombre)) {
                return prev.filter((c) => c !== nombre);
            } else {
                return [...prev, nombre];
            }
        });
    };

    useEffect(() => {
        const portafolioGuardar = {
            componentes,
            tituloProyecto,
            descripcionProyecto,
        };
        localStorage.setItem("portafolio", JSON.stringify(portafolioGuardar));
    }, [componentes, tituloProyecto, descripcionProyecto]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("portafolio"));
        if (data) {
            setComponentes(data.componentes || []);
            setTituloProyecto(data.tituloProyecto || "");
            setDescripcionProyecto(data.descripcionProyecto || "");
        }
    }, []);

    const renderComponent = (comp, index) => {
        switch (comp) {
            case "Estructura1":
                return <Estructura1 key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "Estructura1_1":
                return <Estructura1_1 key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "Estructura1_2":
                return <Estructura1_2 key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "Estructura1_3":
                return <Estructura1_3 key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "Estructura1_4":
                return <Estructura1_4 key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "GrillaDoble":
                return <GrillaDoble key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "GrillaTriple":
                return <GrillaTriple key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "Grilla1_2_Izda":
                return <Grilla1_2_Izda key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            case "Grilla1_2_Derecha":
                return <Grilla1_2_Derecha key={comp + index} onActivate={activarEditor} activeElement={activeElement}/>;
            default:
                return null;
        }
    };

    const subirPDFCloudinary = async (pdfBlob) => {
        const formData = new FormData();

        formData.append("file", pdfBlob);
        formData.append("upload_preset", "portfolios");
        formData.append("resource_type", "raw");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dyy1yqvbv/raw/upload",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await res.json();

        console.log("Cloudinary:", data);

        return data.secure_url;
    };

    async function guardarPortafolio() {
        try {
            Swal.fire({
                title: "Guardando portafolio...",
                text: "Generando y subiendo PDF",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const pdfBlob = await generarPDFBlob(lienzoRef);

            const pdfUrl = await subirPDFCloudinary(pdfBlob);

            if (!pdfUrl) {
                throw new Error("No se pudo subir el PDF");
            }

            const data = {
                usuarioId: localStorage.getItem("idUsuario") || "desconocido",
                componentes: componentes,
                titulo: tituloProyecto,
                descripcion: descripcionProyecto,
                pdf: pdfUrl
            };

            console.log("DATA:", data);

            const peticion = await Fetch.postData(data, "portafolios");

            console.log("Guardado:", peticion);

            Swal.fire({
                icon: "success",
                title: "Portafolio guardado",
                text: "PDF subido correctamente"
            });

        } catch (error) {
            console.error(error);

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo guardar el portafolio"
            });
        }
    }

    return (
        <>
            <NavBarEditor guardar={guardarPortafolio} onPreview={handlePreview} />

            <ImageProvider>
                <div className="portafolio-container">
                    <div className="layout">

                        <div className="lienzo-container" ref={lienzoRef} onClick={() => setActiveElement(null)}>
                            <Lienzo
                                onActivate={activarEditor}
                                tituloProyecto={tituloProyecto}
                                descripcionProyecto={descripcionProyecto}
                                onTituloChange={(e) => setTituloProyecto(e.target.value)}
                                onDescripcionChange={(e) => setDescripcionProyecto(e.target.value)}
                                childrenEstructura={
                                    <>
                                        {componentes.map((comp, index) =>
                                            renderComponent(comp, index)
                                        )}
                                    </>
                                }
                            />
                        </div>

                        <div className="sidebar-container">
                            <SidebarTalentos
                                actEst1={() => toggleComponente("Estructura1")}
                                actEst1_1={() => toggleComponente("Estructura1_1")}
                                actEst1_2={() => toggleComponente("Estructura1_2")}
                                actEst1_3={() => toggleComponente("Estructura1_3")}
                                actEst1_4={() => toggleComponente("Estructura1_4")}
                                actGrillaDoble={() => toggleComponente("GrillaDoble")}
                                actGrillaTriple={() => toggleComponente("GrillaTriple")}
                                actGrilla1_2_Izda={() => toggleComponente("Grilla1_2_Izda")}
                                actGrilla1_2_Derecha={() => toggleComponente("Grilla1_2_Derecha")}
                            />
                        </div>

                    </div>
                </div>
            </ImageProvider>
            {activeElement && (
                <EditorContenedores
                    tipo={activeElement.tipo}
                    position={toolbarPosition}
                    setColorFondo={activeElement.setColorFondo}
                    setImageUrl={activeElement.setImageUrl}
                    setColorTexto={activeElement.setColorTexto}
                    imageUrl={activeElement.imageUrl}
                />
            )}

            <div className="preview-modal" style={{display: showPreviewModal ? 'flex' : 'none'}} onClick={closePreview}>
                <div className="preview-modal__content" onClick={(e) => e.stopPropagation()}>
                    <button className="preview-modal__close" onClick={closePreview}>×</button>
                    <div className="preview-modal__body">
                        {previewImage && <img src={previewImage} alt="Vista previa" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portafolio;
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
            if (prev.find(c => c.type === nombre)) {
                return prev.filter((c) => c.type !== nombre);
            } else {
                const nuevoComp = {
                    id: crypto.randomUUID(),
                    type: nombre,
                    data: {
                        texto: "",
                        colorTexto: "#1a202c",
                        colorFondo: "",
                        imageUrl: "",
                        fontSize: "16px",
                        bold: false,
                        italic: false,
                        align: "left",
                        childColorFondo: "",
                        childImageUrl: ""
                    }
                };
                return [...prev, nuevoComp];
            }
        });
    };

    const updateComponentData = (id, newData) => {
        setComponentes(prev => prev.map(c => 
            c.id === id ? { ...c, data: { ...c.data, ...newData } } : c
        ));
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
        const props = {
            key: comp.id || index,
            onActivate: (e, data) => activarEditor(e, { ...data, id: comp.id }),
            activeElement: activeElement,
            initialData: comp.data,
            onUpdate: (newData) => updateComponentData(comp.id, newData)
        };

        const type = typeof comp === 'string' ? comp : comp.type;

        switch (type) {
            case "Estructura1": return <Estructura1 {...props} />;
            case "Estructura1_1": return <Estructura1_1 {...props} />;
            case "Estructura1_2": return <Estructura1_2 {...props} />;
            case "Estructura1_3": return <Estructura1_3 {...props} />;
            case "Estructura1_4": return <Estructura1_4 {...props} />;
            case "GrillaDoble": return <GrillaDoble {...props} />;
            case "GrillaTriple": return <GrillaTriple {...props} />;
            case "Grilla1_2_Izda": return <Grilla1_2_Izda {...props} />;
            case "Grilla1_2_Derecha": return <Grilla1_2_Derecha {...props} />;
            default: return null;
        }
    };

    const subirArchivoCloudinary = async (archivo, type = "raw") => {
        const formData = new FormData();
        formData.append("file", archivo);
        formData.append("upload_preset", "portfolios");
        formData.append("resource_type", type);

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/dyy1yqvbv/${type}/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        if (!res.ok) return null;
        const data = await res.json();
        return data.secure_url;
    };

    async function guardarPortafolio() {
        try {
            Swal.fire({
                title: "Guardando portafolio...",
                text: "Capturando vista previa y subiendo archivos",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // 1. Capturar imagen de portada (Thumbnail)
            const canvas = await html2canvas(lienzoRef.current, { useCORS: true, allowTaint: true });
            const imagenBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.8));
            const imgPortadaUrl = await subirArchivoCloudinary(imagenBlob, "image");

            // 2. Generar y subir PDF
            const pdfBlob = await generarPDFBlob(lienzoRef);
            const pdfUrl = await subirArchivoCloudinary(pdfBlob, "raw");

            if (!pdfUrl) {
                throw new Error("No se pudo subir el archivo");
            }

            const usuarioActivo = JSON.parse(localStorage.getItem("UsuarioActivo") || "{}");
            
            const data = {
                usuarioId: localStorage.getItem("idUsuario") || usuarioActivo.id || "desconocido",
                componentes: componentes,
                titulo: tituloProyecto,
                descripcion: descripcionProyecto,
                pdf: pdfUrl,
                imgPortada: imgPortadaUrl, // ✅ Guardar la imagen real
                nombreUsuario: usuarioActivo.Nombre || "Usuario"
            };

            await Fetch.postData(data, "portafolios");

            Swal.fire({
                icon: "success",
                title: "Portafolio guardado",
                text: "Portafolio y vista previa guardados correctamente"
            });

        } catch (error) {
            console.error(error);
            Swal.fire({ icon: "error", title: "Error", text: "No se pudo guardar el portafolio" });
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
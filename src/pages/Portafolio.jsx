import NavBarEditor from "../components/PlantillaTalentos/NavBarEditor";
import Lienzo from "../components/PlantillaTalentos/Lienzo";
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

const Portafolio = () => {
    const [componentes, setComponentes] = useState([]);
    const [tituloProyecto, setTituloProyecto] = useState("");
    const [descripcionProyecto, setDescripcionProyecto] = useState("");

    const [activeElement, setActiveElement] = useState(null);
    const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });

    const activarEditor = (e, data) => {
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();

        setActiveElement(data);

        setToolbarPosition({
            x: rect.left + rect.width / 2,
            y: rect.top
        });
    };

    const lienzoRef = useRef();

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
                return <Estructura1 key={comp + index} />;
            case "Estructura1_1":
                return <Estructura1_1 key={comp + index} />;
            case "Estructura1_2":
                return <Estructura1_2 key={comp + index} />;
            case "Estructura1_3":
                return <Estructura1_3 key={comp + index} />;
            case "Estructura1_4":
                return <Estructura1_4 key={comp + index} />;
            case "GrillaDoble":
                return <GrillaDoble key={comp + index} />;
            case "GrillaTriple":
                return <GrillaTriple key={comp + index} />;
            case "Grilla1_2_Izda":
                return <Grilla1_2_Izda key={comp + index} />;
            case "Grilla1_2_Derecha":
                return <Grilla1_2_Derecha key={comp + index} />;
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
                usuarioId: "1",
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
            <NavBarEditor guardar={guardarPortafolio} />

            <ImageProvider>
                <div className="portafolio-container">
                    <div className="layout">

                        <div className="lienzo-container" ref={lienzoRef}>
                            <Lienzo
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
        </>
    );
};

export default Portafolio;
import NavBarEditor from "../components/PlantillaTalentos/NavBarEditor"
import Lienzo from "../components/PlantillaTalentos/Lienzo"
import Estructura1 from "../components/PlantillaTalentos/Estructura1"
import Estructura1_1 from "../components/PlantillaTalentos/Estructura1_1"
import Estructura1_2 from "../components/PlantillaTalentos/Estructura1_2"
import Estructura1_3 from "../components/PlantillaTalentos/Estructura1_3"
import GrillaDoble from "../components/PlantillaTalentos/GrillaDoble"
import GrillaTriple from "../components/PlantillaTalentos/GrillaTriple"
import Grilla1_2_Izda from "../components/PlantillaTalentos/Grilla1_2_Izda"
import Grilla1_2_Derecha from "../components/PlantillaTalentos/Grilla1_2_Derecha"
import SidebarTalentos from "../components/PlantillaTalentos/SidebarTalentos"
import "../styles/PlantillaTalentos/Portafolio.css"

import { useState, useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

import { ImageProvider } from "../components/PlantillaTalentos/HookImagenCloudinary"

const Portafolio = () => {

    const [activarEst1, setActivarEst1] = useState(false);
    const [activarEst1_1, setActivarEst1_1] = useState(false);
    const [activarEst1_2, setActivarEst1_2] = useState(false);
    const [activarGrilla1_2_Izda, setActivarGrilla1_2_Izda] = useState(false);
    const [activarGrilla1_2_Derecha, setActivarGrilla1_2_Derecha] = useState(false);

    // 🔥 REF DEL LIENZO
    const lienzoRef = useRef();

    // 🔥 FUNCIÓN PARA EXPORTAR PDF
    const descargarPDF = async () => {
        const canvas = await html2canvas(lienzoRef.current, {
            scale: 2,
            useCORS: true
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // 🔥 MULTI PÁGINA SI ES NECESARIO
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save("portafolio.pdf");
    };

    return (
        <>
            <NavBarEditor />
            <ImageProvider>
                <div className="portafolio-container">

                    <div className="layout">
                        <div className="lienzo-container" ref={lienzoRef}>
                            <Lienzo
                                tituloProyecto={"Portafolio"}
                                subtituloProyecto={"Portafolio"}
                                childrenEstructura={
                                    <>
                                        {activarEst1 && <Estructura1 />}
                                        {activarEst1_1 && <Estructura1_1 />}
                                        {activarEst1_2 && <Estructura1_2 />}
                                        {activarGrilla1_2_Izda && <Grilla1_2_Izda />}
                                        {activarGrilla1_2_Derecha && <Grilla1_2_Derecha />}
                                    </>
                                }
                            />
                        </div>

                        <div className="sidebar-container">
                            <button onClick={descargarPDF} className="btn-pdf">Descargar PDF</button>
                            <SidebarTalentos
                                actEst1={() => setActivarEst1(!activarEst1)}
                                actEst1_1={() => setActivarEst1_1(!activarEst1_1)}
                                actEst1_2={() => setActivarEst1_2(!activarEst1_2)}
                                actGrilla1_2_Izda={() => setActivarGrilla1_2_Izda(!activarGrilla1_2_Izda)}
                                actGrilla1_2_Derecha={() => setActivarGrilla1_2_Derecha(!activarGrilla1_2_Derecha)}
                            />
                        </div>
                    </div>

                </div>
            </ImageProvider>
        </>
    );
};

export default Portafolio;
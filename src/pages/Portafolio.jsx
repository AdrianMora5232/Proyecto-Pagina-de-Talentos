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
import { useState } from "react"
import { ImageProvider } from "../components/PlantillaTalentos/HookImagenCloudinary"

const Portafolio = () => {
    const [activarEst1, setActivarEst1] = useState(false);

    return (
        <ImageProvider> {/* 👈 AQUI ESTÁ LA SOLUCIÓN */}
            <div className="portafolio-container">

                <div className="lienzo-container">
                    <Lienzo
                        tituloProyecto={"Portafolio"}
                        subtituloProyecto={"Portafolio"}
                        childrenEstructura={
                            activarEst1 && (
                                <Estructura1 />
                            )
                        }
                    />
                </div>

                <div className="sidebar-container">
                    <SidebarTalentos actEst1={()=>{
                        setActivarEst1(!activarEst1)
                    }}/>
                </div>

            </div>
        </ImageProvider>
    );
};

export default Portafolio;
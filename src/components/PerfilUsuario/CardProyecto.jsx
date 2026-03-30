import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css";
import React from "react";
import Lienzo from "../PlantillaTalentos/Lienzo";
import Estructura1 from "../PlantillaTalentos/Estructura1";
import Estructura1_1 from "../PlantillaTalentos/Estructura1_1";
import Estructura1_2 from "../PlantillaTalentos/Estructura1_2";
import Estructura1_3 from "../PlantillaTalentos/Estructura1_3";
import Estructura1_4 from "../PlantillaTalentos/Estructura1_4";
import GrillaDoble from "../PlantillaTalentos/GrillaDoble";
import GrillaTriple from "../PlantillaTalentos/GrillaTriple";
import Grilla1_2_Izda from "../PlantillaTalentos/Grilla1_2_Izda";
import Grilla1_2_Derecha from "../PlantillaTalentos/Grilla1_2_Derecha";

const CONTENEDORES = {
    Estructura1,
    Estructura1_1,
    Estructura1_2,
    Estructura1_3,
    Estructura1_4,
    GrillaDoble,
    GrillaTriple,
    Grilla1_2_Izda,
    Grilla1_2_Derecha
};

const CardProyecto = ({ nombreProyecto, descripcionProyecto, estructura, onVerProyecto, promedio }) => {
    const ComponentePreview = CONTENEDORES[estructura];

    return (
        <div>
            <div className="proyecto-card">
                <div style={{ width: '100%', height: '160px', overflow: 'hidden', position: 'relative', background: '#f8f9fa' }}>
                    <div style={{ transform: 'scale(0.25)', transformOrigin: 'top left', width: '400%', height: '400%', pointerEvents: 'none' }}>
                        {ComponentePreview ? (
                            <Lienzo
                                tituloProyecto={nombreProyecto}
                                descripcionProyecto={descripcionProyecto}
                                childrenEstructura={<ComponentePreview />}
                            />
                        ) : (
                            <div style={{padding: '40px', fontSize: '40px', textAlign: 'center', color: '#ccc'}}>Sin previsualización</div>
                        )}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '15px' }}>
                    <h4>{nombreProyecto}</h4>
                    <span style={{color: '#f39c12', fontSize: '14px', fontWeight: 'bold'}}>★ {promedio}</span>
                </div>
                <p>{descripcionProyecto}</p>
                <button onClick={onVerProyecto}>
                    Ver proyecto <span className="fa-solid fa-arrow-right"></span>
                </button>
            </div>
        </div>
    )
}

export default CardProyecto;
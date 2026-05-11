import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css";
import React from "react";
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

const CardProyecto = ({ nombreProyecto, descripcionProyecto, estructura, onVerProyecto, promedio, imgPortada, idProyecto, onDelete }) => {
    const firstComp = typeof estructura === 'string' ? { type: estructura } : estructura;
    const ComponentePreview = CONTENEDORES[firstComp?.type];
    const initialData = firstComp?.data;

    return (
        <div className="proyecto-card" onClick={onVerProyecto}>
            <div className="proyecto-card-media" style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative', background: '#f0f4f8' }}>
                {imgPortada ? (
                    <img src={imgPortada} alt={nombreProyecto} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%) scale(0.28)',
                        transformOrigin: 'top center',
                        width: `${100 / 0.28}%`,
                        pointerEvents: 'none'
                    }}>
                        {ComponentePreview ? <ComponentePreview initialData={initialData} /> : <div className="sin-preview">Sin previsualización</div>}
                    </div>
                )}
                <div className="card-overlay-pro"></div>
                
                <div className="card-actions-pro" style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px', zIndex: 20 }}>
                    {onDelete && (
                        <button 
                            className="btn-delete-pro" 
                            onClick={(e) => { e.stopPropagation(); onDelete(); }}
                            style={{ 
                                background: 'rgba(239, 68, 68, 0.9)', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '50%', 
                                width: '32px', 
                                height: '32px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <i className="fa-solid fa-trash-can" style={{ fontSize: '14px' }}></i>
                        </button>
                    )}
                </div>
            </div>
            <div className="proyecto-card-info" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{nombreProyecto}</h4>
                    <span style={{ color: '#f39c12', fontSize: '14px', fontWeight: 'bold' }}>★ {promedio || "0"}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.4', height: '40px', overflow: 'hidden' }}>{descripcionProyecto}</p>
                <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                    <span className="ver-mas-link" style={{ color: '#0db9f2', fontWeight: '600', fontSize: '14px' }}>
                        Ver detalle <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardProyecto;
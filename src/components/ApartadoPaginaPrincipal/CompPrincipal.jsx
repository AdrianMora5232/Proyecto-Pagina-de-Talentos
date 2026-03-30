import React, { useRef, useState, useEffect, useMemo } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../styles/Principal.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Fetch from "../../services/Fetch";
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
function CompPrincipal() {
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const [datos, setDatos] = useState({ usuarios: [], portafolios: [], resenas: [] });

    useEffect(() => {
        const cargarDatos = async () => {
            const [u, p, r] = await Promise.all([
                Fetch.getData("usuarios"),
                Fetch.getData("portafolios"),
                Fetch.getData("resenas")
            ]);
            setDatos({ usuarios: u || [], portafolios: p || [], resenas: r || [] });
        };
        cargarDatos();
    }, []);

    const usuariosConMejorPortafolio = useMemo(() => {
        return datos.usuarios.map(u => {
            const userPorts = datos.portafolios.filter(p => String(p.usuarioId) === String(u.id));
            if (userPorts.length === 0) return null;
            
            const portsWithRating = userPorts.map(p => {
                const res = datos.resenas.filter(r => r.portafolioId === p.id);
                const avgRating = res.length > 0 ? res.reduce((acc, curr) => acc + curr.rating, 0) / res.length : 0;
                return { ...p, promedio: avgRating };
            });

            const bestPort = portsWithRating.reduce((prev, curr) => 
                (curr.promedio >= prev.promedio) ? curr : prev
            );

            return { ...u, mejorPortafolio: bestPort };
        }).filter(u => u !== null);
    }, [datos]);

    const talentoDestacado = useMemo(() => {
        if (usuariosConMejorPortafolio.length === 0) return null;
        return [...usuariosConMejorPortafolio].sort((a, b) => 
            b.mejorPortafolio.promedio - a.mejorPortafolio.promedio
        )[0];
    }, [usuariosConMejorPortafolio]);

    const obtenerUbicacion = (user) => {
        const partes = [user.Provincias, user.Canton, user.Distrito].filter(v => v && v !== 'si' && v !== 'xd');
        return partes.length > 0 ? partes.join(", ") : "Ubicación no disponible";
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    const renderPreview = (port, height = '180px', scale = 0.28) => {
        // Si ya tenemos una imagen de portada real, la usamos (Prioridad 1)
        if (port.imgPortada) {
            return (
                <div className="proyecto-card-media" style={{ height, overflow: 'hidden', background: '#f0f4f8' }}>
                    <img 
                        src={port.imgPortada} 
                        alt={port.titulo} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </div>
            );
        }

        // Si no hay imagen, intentamos renderizar la estructura dinámica (Fallback)
        const firstComp = port.componentes?.[0];
        const estructura = typeof firstComp === 'string' ? firstComp : firstComp?.type;
        const ComponentePreview = CONTENEDORES[estructura];
        const initialData = typeof firstComp === 'object' ? firstComp?.data : null;
        
        return (
            <div className="proyecto-card-media" style={{ height, overflow: 'hidden', position: 'relative', background: '#f0f4f8' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: `translateX(-50%) scale(${scale})`,
                    transformOrigin: 'top center',
                    width: `${100 / scale}%`,
                    pointerEvents: 'none'
                }}>
                    {ComponentePreview ? <ComponentePreview initialData={initialData} /> : <div className="sin-preview d-flex align-items-center justify-content-center h-100">Sin previsualización</div>}
                </div>
            </div>
        );
    };


    return (
        <div>
            {/* div para contener el header de la pagina, osea nombre de la pagina,navbar y apartado de busqueda */}
            <div>

                {/* Logo placeholder o imagen removida si no hay src */}
                <div className='headerLogo'>
                    <div className="logo-icon" style={{ width: '40px', height: '40px', background: '#0db9f2', borderRadius: '8px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>K</div>
                    <h3 className='TituloLogo'>Krea</h3>
                </div>

            </div>
            {/* Div para contener la imagen central de la pagina, incluye el boton y una descripcion */}
            <div className='DivImagenFondo'>
                <div className='cont-textos'>
                    <h2 className='SubTituloImagen'>Bienvenidos a KREA</h2>
                    <p className='ParrafoImagen'>KREA es una plataforma digital que permite a profesionales y creativos crear portafolios modernos, claros y estratégicos.
                        Ayudamos a que el talento no solo se vea bien, sino que comunique valor y abra oportunidades reales.</p>
                    <button
                        onClick={()=>{
                            navigate("/portafolio")
                        }}
                    
                    className='ButtonCrearCuenta'>Crear Portafolio</button>
                    <br />
                </div>

            </div>
            <br />
            <br />
            <br />
            {/*div que contiene el apartado de divisiones de tipos de talentos y las cartas */}
            <div>
                <div className="carousel-wrapper" style={{ position: 'relative', width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
                    <button onClick={scrollLeft} className="btn-carousel left">
                        &#10094;
                    </button>

                    <div className='ApartadoCartas' ref={carouselRef}>
                        {/* Este div es para el comienzo de el apartado de cartas */}

                        {usuariosConMejorPortafolio.map((user) => (
                            <div className="card" key={user.id} style={{ width: "18rem" }}>
                                {renderPreview(user.mejorPortafolio)}
                                <div className="card-body">
                                    <h5 className="card-title text-truncate">{user.mejorPortafolio.titulo}</h5>
                                    <p className="card-text text-truncate" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', whiteSpace: 'normal', height: '3rem' }}>
                                        {user.mejorPortafolio.descripcion}
                                    </p>
                                    <hr />
                                    <div className="d-flex align-items-center mt-2">
                                        <img 
                                            src={user.img || "https://via.placeholder.com/150"} 
                                            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                                            alt={user.Nombre} 
                                        />
                                        <div className="ms-3 overflow-hidden">
                                            <h6 className="mb-0 text-truncate" style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e293b' }}>{user.Nombre}</h6>
                                            {user.Profesion && (
                                                <p className="mb-0 text-muted text-truncate" style={{ fontSize: '0.8rem' }}>{user.Profesion}</p>
                                            )}
                                            <small className="text-muted text-truncate d-block" style={{ fontSize: '0.75rem' }}>
                                                <i className="fa-solid fa-location-dot me-1"></i>
                                                {obtenerUbicacion(user)}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/*Este div es para finalizar las cartas  */}
                    </div>

                    <button onClick={scrollRight} className="btn-carousel right">
                        &#10095;
                    </button>
                </div>
            </div>
            <h4 className='TituloTalentDestacado'>Talento Destacado del mes</h4>
            {/* div que va a contener El talento destacado  */}
            {talentoDestacado ? (
                <div className='DivTalentoDestacado'>
                    <div className='imgCont'>
                        {renderPreview(talentoDestacado.mejorPortafolio, '100%', '450px', 0.45)}
                    </div>
                    <div className='DivInfoPintura'>
                        <h2>{talentoDestacado.mejorPortafolio.titulo}</h2>
                        <div className="d-flex align-items-center mb-3">
                            <img 
                                src={talentoDestacado.img || "https://via.placeholder.com/150"} 
                                style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #2563eb' }} 
                                alt={talentoDestacado.Nombre} 
                            />
                            <div className="ms-3">
                                <h4 className="mb-0">Autor: {talentoDestacado.Nombre}</h4>
                                {talentoDestacado.Profesion && (
                                    <small className="text-muted d-block">{talentoDestacado.Profesion}</small>
                                )}
                            </div>
                        </div>
                        <h6>
                            Ubicación: {obtenerUbicacion(talentoDestacado)}
                            <br />
                            Calificación promedio: ★ {talentoDestacado.mejorPortafolio.promedio}
                        </h6>
                        <h6>Resumen del portafolio:</h6>
                        <ul>
                            <li>{talentoDestacado.mejorPortafolio.descripcion}</li>
                        </ul>
                        <button 
                            className='BotonVerPerfil'
                            onClick={() => navigate(`/perfil/${talentoDestacado.id}`)}
                        >
                            Ver perfil
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center p-5">
                    <p>Cargando talento destacado...</p>
                </div>
            )}

        </div >
    )
}

export default CompPrincipal

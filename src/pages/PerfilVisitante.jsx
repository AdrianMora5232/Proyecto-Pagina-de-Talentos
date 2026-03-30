import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import InfoUsuario from '../components/PerfilUsuario/InfoUsuario';
import SeccionesPerfil from '../components/PerfilUsuario/SeccionesPerfil';
import CardProyecto from '../components/PerfilUsuario/CardProyecto';
import ModalProyecto from '../components/PerfilUsuario/ModalProyecto';
import Fetch from '../services/Fetch';
import { calcularPromedio } from '../utils/calcularPromedio';

// Reutilizamos exactamente los mismos estilos del perfil personal
import '../styles/EstilosPerfilUsuario/PerfilUsuario.css';
import '../styles/EstilosPerfilUsuario/InfoUsuarios.css';
import '../styles/EstilosPerfilUsuario/ProyectosRecientes.css';
import '../styles/EstilosPerfilUsuario/ResenasUsuario.css';
import '../styles/EstilosPerfilUsuario/SeccionesPerfil.css';

/**
 * PerfilVisitante — /perfil/:usuarioId
 *
 * Muestra el perfil PÚBLICO de cualquier usuario.
 * Reutiliza InfoUsuario con isOwner=false (sin edición, sin admin).
 * Reutiliza CardProyecto + ModalProyecto para los proyectos.
 * Carga datos desde Fetch usando el :usuarioId de la URL.
 * No modifica ningún componente existente.
 */
function PerfilVisitante() {
    const { usuarioId } = useParams();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);
    const [portafolios, setPortafolios] = useState([]);
    const [todasResenas, setTodasResenas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    // Cargar datos — misma lógica que PerfilUsuario + ProyectosRecientes
    // pero parametrizada por usuarioId de la URL en lugar de localStorage
    const cargarDatos = async () => {
        setCargando(true);
        try {
            const [usuarios, todosPortafolios, resenas] = await Promise.all([
                Fetch.getData('usuarios'),
                Fetch.getData('portafolios'),
                Fetch.getData('resenas'),
            ]);

            const usuarioEncontrado = (usuarios || []).find(
                (u) => String(u.id) === String(usuarioId)
            );
            setUsuario(usuarioEncontrado || null);

            const portafoliosUsuario = (todosPortafolios || []).filter(
                (p) => String(p.usuarioId) === String(usuarioId)
            );
            setPortafolios(portafoliosUsuario);

            setTodasResenas(resenas || []);
        } catch (error) {
            console.error('PerfilVisitante — error cargando datos:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarDatos();
    }, [usuarioId]);

    // Reseñas recibidas en los portafolios de este usuario
    const resenasDelUsuario = useMemo(() => {
        const idsPortafolios = new Set(portafolios.map((p) => p.id));
        return todasResenas.filter((r) => idsPortafolios.has(r.portafolioId));
    }, [portafolios, todasResenas]);

    // Distribución de estrellas — misma lógica que ResenasUsuario
    const promedio = useMemo(() => calcularPromedio(resenasDelUsuario), [resenasDelUsuario]);

    const distribucion = useMemo(() => {
        const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        resenasDelUsuario.forEach((r) => dist[r.rating]++);
        return dist;
    }, [resenasDelUsuario]);

    const total = resenasDelUsuario.length || 1;

    // Reseñas del proyecto actualmente abierto en el modal
    const resenasProyecto = useMemo(() => {
        if (!proyectoSeleccionado) return [];
        return todasResenas.filter(
            (r) => r.portafolioId === proyectoSeleccionado.id
        );
    }, [proyectoSeleccionado, todasResenas]);

    if (cargando) {
        return (
            <div className="perfil-page">
                <Navbar />
                <div style={{ padding: '80px 20px', textAlign: 'center', color: '#6b7a8c' }}>
                    <p>Cargando perfil...</p>
                </div>
            </div>
        );
    }

    if (!usuario) {
        return (
            <div className="perfil-page">
                <Navbar />
                <div style={{ padding: '80px 20px', textAlign: 'center', color: '#6b7a8c' }}>
                    <p>No se encontró el usuario.</p>
                    <button
                        className="btn-create-empty"
                        onClick={() => navigate('/todos-proyectos')}
                        style={{ marginTop: '20px' }}
                    >
                        ← Volver a proyectos
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="perfil-page">
            {/* NAVBAR — misma que usa el perfil personal */}
            <Navbar />

            {/* Barra de navegación de vuelta — only in visitor mode */}
            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '16px 20px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'none',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '7px 14px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#4a5568',
                        cursor: 'pointer',
                        transition: 'all .2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#f7fafc'; e.currentTarget.style.borderColor = '#cbd5e0'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                    ← Volver
                </button>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                    Perfil de <strong style={{ color: '#4a5568' }}>{usuario.Nombre}</strong>
                </span>
            </div>

            {/* INFO DEL USUARIO — InfoUsuario con isOwner=false:
                nunca muestra "Editar perfil" ni "Panel Admin" */}
            <div className="perfil-content">
                <InfoUsuario
                    usuario={usuario}
                    isOwner={false}
                    onUpdate={null}
                />
            </div>

            {/* TABS — reutiliza exactamente SeccionesPerfil */}
            <div className="secciones-perfil">
                <SeccionesPerfil />
            </div>

            {/* RESEÑAS — misma estructura visual que ResenasUsuario.jsx
                pero parametrizada por los portafolios del usuario visitado */}
            <div className="perfil-resenas" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <div className="resenas-container">
                    {/* Score */}
                    <div className="resenas-score">
                        <h2>{promedio}</h2>
                        <p>Promedio de {resenasDelUsuario.length} valoraciones</p>
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="barra">
                                <span>{star}</span>
                                <div className="barra-bg">
                                    <div
                                        className="barra-fill"
                                        style={{ width: `${(distribucion[star] / total) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lista */}
                    <div className="resenas-list">
                        <h4>Reseñas de Clientes</h4>
                        {resenasDelUsuario.length === 0 ? (
                            <p style={{ color: '#777', fontStyle: 'italic' }}>
                                Este usuario aún no tiene reseñas.
                            </p>
                        ) : (
                            resenasDelUsuario.map((r, i) => (
                                <div key={i} className="resena-card">
                                    <div className="resena-stars">
                                        {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                                    </div>
                                    <p className="resena-text">{r.comentario}</p>
                                    <span className="resena-user">
                                        {r.fecha ? new Date(r.fecha).toLocaleDateString() : ''}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* PROYECTOS — usa CardProyecto + ModalProyecto, igual que ProyectosRecientes
                pero cargando los portafolios del usuario visitado */}
            <div className="proyectos-container">
                <div className="proyectos-header">
                    <h4>Proyectos Recientes</h4>
                    <p>{portafolios.length} proyecto{portafolios.length !== 1 ? 's' : ''}</p>
                </div>

                <div className="proyectos-grid">
                    {portafolios.length === 0 ? (
                        <div className="empty-state-container">
                            <div className="empty-state-icon">📁</div>
                            <h4>Este usuario aún no tiene proyectos</h4>
                            <p>Los proyectos que cree aparecerán aquí automáticamente.</p>
                        </div>
                    ) : (
                        <>
                            {portafolios.slice(0, visibleCount).map((proyecto) => {
                                const resenasP = todasResenas.filter(
                                    (r) => r.portafolioId === proyecto.id
                                );
                                return (
                                    <CardProyecto
                                        key={proyecto.id}
                                        idProyecto={proyecto.id}
                                        nombreProyecto={proyecto.titulo}
                                        descripcionProyecto={proyecto.descripcion}
                                        estructura={proyecto.componentes?.[0]}
                                        promedio={calcularPromedio(resenasP)}
                                        imgPortada={proyecto.imgPortada}
                                        onVerProyecto={() => setProyectoSeleccionado(proyecto)}
                                    />
                                );
                            })}

                            {portafolios.length > visibleCount && (
                                <div
                                    style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '20px' }}
                                >
                                    <button
                                        className="btn-create-empty"
                                        onClick={() => setVisibleCount((prev) => prev + 6)}
                                    >
                                        Cargar más proyectos
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Modal de proyecto — ModalProyecto existente sin modificar.
                    isOwner se calcula dentro de ModalProyecto comparando
                    localStorage con proyecto.usuarioId, así que si el
                    visitante no es el dueño, el botón "Editar" no aparece. */}
                <ModalProyecto
                    proyecto={proyectoSeleccionado}
                    resenas={resenasProyecto}
                    onClose={() => setProyectoSeleccionado(null)}
                    onReviewAdded={cargarDatos}
                />
            </div>
        </div>
    );
}

export default PerfilVisitante;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fetch from "../../services/Fetch";
import PreviewComponentes from '../PlantillaTalentos/PreviewComponentes';
import '../../styles/Principales/InicioPagina.css';

function ProjectShowcase({ showcaseRef }) {
    const navigate = useNavigate();
    const carouselRef = useRef(null);
    const [datos, setDatos] = useState({ usuarios: [], portafolios: [], resenas: [] });
    const [activeCategory, setActiveCategory] = useState('Todo');

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const [u, p, r] = await Promise.all([
                    Fetch.getData("usuarios"),
                    Fetch.getData("portafolios"),
                    Fetch.getData("resenas")
                ]);
                setDatos({ usuarios: u || [], portafolios: p || [], resenas: r || [] });
            } catch (error) {
                console.error("Error cargando portafolios:", error);
            }
        };
        cargarDatos();
    }, []);

    const categories = [
        'Todo',
        'Diseño y creatividad visual',
        'UX/UI',
        'Desarrollo y tecnología creativa',
        'Multimedia y animación',
        'Fotografía y arte visual',
        'Publicidad y marketing',
        'Arquitectura',
        'Diseño de interiores',
        'Diseño industrial',
        'Educación',
        'Escritura y contenido',
        'Manualidades y arte hecho a mano',
        'Moda y costura',
        'Música y producción sonora',
        'Ilustración',
        'Modelado 3D',
    ];

    const portafoliosProcesados = useMemo(() => {
        if (!datos.portafolios || datos.portafolios.length === 0) return [];
        
        return datos.portafolios
            .slice()
            .sort((a, b) => Number(b.id) - Number(a.id))
            .map(p => {
                const user = datos.usuarios.find(u => String(u.id) === String(p.usuarioId));
                const userFinal = user || { Nombre: p.nombreUsuario || "Usuario", img: "" };
                return { ...p, user: userFinal };
            });
    }, [datos]);

    const filteredProjects = useMemo(() => {
        let list = portafoliosProcesados;
        if (activeCategory !== 'Todo') {
            list = portafoliosProcesados.filter(p =>
                (p.categorias || []).includes(activeCategory)
            );
        }
        return list.slice(0, 12);
    }, [portafoliosProcesados, activeCategory]);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    return (
        <section className='ShowcaseSection' ref={showcaseRef}>
            <div className='ShowcaseHeader'>
                <span className='ShowcaseEyebrow'>✦ Portafolios destacados</span>
                <h2 className='ShowcaseTitle'>Descubre la excelencia creativa</h2>
                <p className='ShowcaseSubtitle'>
                    Explora los proyectos más innovadores y conecta con el talento que está
                    transformando el futuro digital.
                </p>
            </div>

            <div className='CategoryFilters'>
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        className={`FilterBtn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className='CarouselWrapper'>
                <button className='NavArrow left' onClick={scrollLeft}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div className='ProjectsCarousel' ref={carouselRef}>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className='ProjectCard card-carousel'
                            onClick={() => navigate('/Registro')}
                        >
                            <div className='ProjectMedia'>
                                <PreviewComponentes componentes={project.componentes} />
                            </div>
                            <div className='ProjectContent'>
                                <div className='ProjectCategories'>
                                    {(project.categorias?.length > 0 ? project.categorias : ["Proyecto"])
                                        .slice(0, 2)
                                        .map(cat => (
                                            <span key={cat} className='ProjectCategory'>{cat}</span>
                                        ))
                                    }
                                    {project.categorias?.length > 2 && (
                                        <span className='ProjectCategoryMore'>+{project.categorias.length - 2}</span>
                                    )}
                                </div>
                                <h3 className='ProjectTitle'>{project.titulo}</h3>
                                <div className='ProjectFooter'>
                                    <div className='UserInfo'>
                                        <img src={project.user?.img || "https://via.placeholder.com/50"} alt={project.user?.Nombre} />
                                        <span>{project.user?.Nombre}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="no-projects">No se encontraron proyectos en esta categoría.</div>
                    )}
                </div>

                <button className='NavArrow right' onClick={scrollRight}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </section>
    );
}

export default ProjectShowcase;

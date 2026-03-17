import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../styles/Principal.css"

function CompPrincipal() {
    const carouselRef = useRef(null);

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


    return (
        <div>
            {/* div para contener el header de la pagina, osea nombre de la pagina,navbar y apartado de busqueda */}
            <div>

                <img src="#" alt="Logo de la pagina" />
                <h1>KREA</h1>
                <h3>Pagina para mostrar tu talento a todos</h3>

                {/* Navbar de las paginas y apartado para bsuquedas */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/principal">
                                        Inicio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Proyectos
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Contactos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">
                                        {/* Espacio de busqueda por ahora vacio */}
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
            {/* Div para contener la imagen central de la pagina, incluye el boton y una descripcion */}
            <div className='DivImagenFondo'>
                <div className='cont-textos'>
                    <h2 className='SubTituloImagen'>Bienvenidos a KREA</h2>
                    <p className='ParrafoImagen'>KREA es una plataforma digital que permite a profesionales y creativos crear portafolios modernos, claros y estratégicos.
                        Ayudamos a que el talento no solo se vea bien, sino que comunique valor y abra oportunidades reales.</p>
                    <button className='ButtonCrearCuenta'>Crear Portafolio</button>
                    <br />
                </div>

            </div>
            <br />
            <br />
            <br />
            {/*div que contiene el apartado de divisiones de tipos de talentos y las cartas */}
            <div>
                {/* Navegacion de talentos  */}
                <nav className='NavTalentos' aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link">TALENTOS</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Tecnologias
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#" aria-current="page">
                                Bailes o Canto
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Arte
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Entretenimiento o educacion
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="carousel-wrapper" style={{ position: 'relative', width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
                    <button onClick={scrollLeft} className="btn-carousel left">
                        &#10094;
                    </button>

                    <div className='ApartadoCartas' ref={carouselRef}>
                        {/* Este div es para el comienzo de el apartado de cartas */}

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://png.pngtree.com/thumb_back/fw800/background/20220623/pngtree-violinist-art-musician-portrait-photo-image_151500.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Violinista</h5>
                                <p className="card-text">
                                    Soy violinista profesional, apasionado por la música como medio de expresión y conexión humana. A través del violín busco transmitir emociones genuinas, cuidando cada detalle técnico sin perder la sensibilidad artística.
                                    Mi estilo se caracteriza por una interpretación expresiva, precisa y con identidad propia.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                        {/* Esta es la carta #2 */}

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://media.istockphoto.com/id/1207576796/es/foto/joven-artista-creativo-pintando-en-casa.jpg?s=612x612&w=0&k=20&c=ckbc2YFkWlaFw40RyDysZcns4HB7mnbpomgOLgpbi0I=" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pintora de Retratos</h5>
                                <p className="card-text">
                                    Soy pintora especializada en retratos, enfocada en capturar la esencia, la emoción y la historia de cada persona más allá de su apariencia.
                                    A través del color, la luz y los detalles, busco reflejar la personalidad y la profundidad de cada rostro, creando obras que transmitan una conexión auténtica y humana.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>

                        {/*Esta es la carta #3 */}
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://blog.edutin.com/wp-content/uploads/2024/10/freepik__candid-image-photography-natural-textures-highly-r__90881-min.webp" className="card-img-top" alt="..." height={191} />
                            <div className="card-body">
                                <h5 className="card-title">Diseñador Grafico</h5>
                                <p className="card-text">
                                    Soy diseñador gráfico, apasionado por transformar ideas en soluciones visuales claras, creativas y funcionales.
                                    Mi trabajo se centra en comunicar mensajes de forma efectiva, combinando estética, estrategia y coherencia visual para construir identidades que conecten con las personas.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>

                        {/*Esta es la carta #4 */}
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://media.istockphoto.com/id/2160473960/es/foto/feliz-profesor-de-matem%C3%A1ticas-satisfecho-en-la-clase-de-primaria.webp?a=1&b=1&s=612x612&w=0&k=20&c=HjLkhRFUSmG_Its_4yn2O_uUA6VrbaGZyFuUgIEikH0=" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Profesor de Matemáticas</h5>
                                <p className="card-text">
                                    Soy profesor de matemáticas, comprometido con enseñar de forma clara, cercana y significativa.
                                    Creo que las matemáticas no solo son números y fórmulas, sino una herramienta para desarrollar el pensamiento lógico, la resolución de problemas y la curiosidad intelectual.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>

                        {/*Esta es la carta #5 */}
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://cdn.colombia.com/sdi/2023/04/19/cursos-de-desarrollador-full-stack-de-goit-colombia-que-voy-a-estudiar-1139088.jpg" className="card-img-top" alt="..." height={192} />
                            <div className="card-body">
                                <h5 className="card-title">Programador Jr</h5>
                                <p className="card-text">
                                    Soy programador, apasionado por crear soluciones tecnológicas que resuelvan problemas reales y aporten valor.
                                    Disfruto transformar ideas en código funcional, eficiente y escalable, cuidando tanto la lógica interna como la experiencia del usuario final.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>

                        {/*Esta es la carta #6 */}
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://explorando.es/wp-content/uploads/2025/05/animador-de-fiestas-infantiles-todo-lo-que-necesitas-saber.jpg" className="card-img-top" alt="..." height={192} />
                            <div className="card-body">
                                <h5 className="card-title">Animador de Fiestas</h5>
                                <p className="card-text">
                                    Soy animador de fiestas, apasionado por crear momentos de alegría, diversión y experiencias inolvidables.
                                    Mi objetivo es contagiar energía positiva, conectar con el público y transformar cada evento en una celebración única, llena de risas y participación.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>

                        {/*Este div es para finalizar las cartas  */}
                    </div>

                    <button onClick={scrollRight} className="btn-carousel right">
                        &#10095;
                    </button>
                </div>
            </div>

            {/* div que va a contener El talento destacado  */}
            <div className='DivTalentoDestacado'>

             <img src="https://www.arteescuela.com/wp-content/uploads/2022/05/cuadros-famosos-de-paisajes-1200x720.jpg" alt="" height={200} width={800} />
             


        
            </div>


        </div>
    )
}

export default CompPrincipal

import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css"

const CardProyecto = ({nombreProyecto,descripcionProyecto}) => {
    return (
        <div>
            <div className="proyecto-card">
                <img src="https://images.squarespace-cdn.com/content/v1/5eb395e1fd1b486592f0948c/1750174947481-5208D20SEQ7LULNHGTIN/image-asset.jpeg?format=750w" alt="" />
                <h4>{nombreProyecto}</h4>
                <p>{descripcionProyecto}</p>
                <button>
                    Ver proyecto <span className="fa-solid fa-arrow-right"></span>
                </button>
            </div>
        </div>
    )
}

export default CardProyecto
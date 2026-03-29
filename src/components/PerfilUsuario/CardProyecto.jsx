import "../../styles/EstilosPerfilUsuario/ProyectosRecientes.css"

const STRUCTURE_THUMBNAILS = {
    Estructura1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=75",
    Estructura1_1: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=75",
    Estructura1_2: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=75",
    Estructura1_3: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=75",
    Estructura1_4: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=75",
    GrillaDoble: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=75",
    GrillaTriple: "https://images.unsplash.com/photo-1508873699372-7ae144022b55?auto=format&fit=crop&w=800&q=75",
    Grilla1_2_Izda: "https://images.unsplash.com/photo-1523374228107-6e2ba2b31e2b?auto=format&fit=crop&w=800&q=75",
    Grilla1_2_Derecha: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=75",
};

const CardProyecto = ({ nombreProyecto, descripcionProyecto, estructura }) => {
    const imageUrl = STRUCTURE_THUMBNAILS[estructura] || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=75";
    const imageAlt = estructura ? `Miniatura ${estructura}` : "Miniatura de proyecto";

    return (
        <div>
            <div className="proyecto-card">
                <img src={imageUrl} alt={imageAlt} />
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
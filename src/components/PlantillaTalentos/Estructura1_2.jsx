import "../../styles/PlantillaTalentos/Estructura1_2.css"

function Estructura1_2() {
    return (
        <div
            className="est1_2"
            style={{
                backgroundColor: colorFondo,
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <div className="est1_2__content">
                <input
                    className="est1_2__title input-titulo"
                    placeholder="Escribe un titulo"
                    style={{ color: colorTexto }}
                />

                <textarea
                    className="est1_2__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
                <textarea
                    className="est1_2__description input-textbox"
                    placeholder="Escribe un texto"
                    style={{ color: colorTexto }}
                />
            </div>



        </div>
    )
}
export default Estructura1_2;
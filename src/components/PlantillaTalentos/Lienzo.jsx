import "../../styles/PlantillaTalentos/Lienzo.css";

function Lienzo({
    childrenEstructura,
    tituloProyecto,
    descripcionProyecto,
    onTituloChange,
    onDescripcionChange,
    onActivate
}) {
    return (
        <div className="contenedor_lienzo">
            <div className="contenedor_titulos">

                <input
                    type="text"
                    placeholder="TITULO"
                    className="titulos_subs"
                    value={tituloProyecto}
                    onChange={onTituloChange}
                />

                <input
                    type="text"
                    placeholder="DESCRIPCIÓN"
                    className="titulos_subs text-muted"
                    value={descripcionProyecto}
                    onChange={onDescripcionChange}
                />

            </div>

            <div>
                {childrenEstructura}
            </div>
        </div>
    );
}

export default Lienzo;
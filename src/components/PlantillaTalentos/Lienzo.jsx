import "../../styles/PlantillaTalentos/Lienzo.css";


function Lienzo({childrenEstructura}) {
    return (
        <div className="contenedor_lienzo">
            <div className="contenedor_titulos">
            <input 
                type="text" 
                placeholder="TITULO"
                className="titulos_subs"
                />

                <input 
                type="text" 
                placeholder="TITULO"
                className="titulos_subs text-muted"
                />
             </div>

            <div>
                {childrenEstructura}
            </div>
        </div>
    )
}

export default Lienzo;
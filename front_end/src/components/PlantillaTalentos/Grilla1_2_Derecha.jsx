import "../../styles/PlantillaTalentos/Grilla1_2Derecha.css";
import EditableBlock from "./EditableBlock";
import { useEditable } from "./useEditable";

function Grilla1_2_Derecha({ onActivate, initialData, onUpdate }) {
    
    const handleUpdate = (key, newData) => {
        if (onUpdate) {
            onUpdate({ ...initialData, [key]: newData });
        }
    };

    const fondo = useEditable(initialData?.fondo, (d) => handleUpdate('fondo', d));
    const content = useEditable(initialData?.content, (d) => handleUpdate('content', d));

    return (
        <div className="grilla1_2_derecha__grid">
            <div className="grilla1_2_derecha__content" style={{ position: "relative" }}>
                <EditableBlock
                    className="grilla1_2_derecha__title"
                    data={content.state}
                    update={content.update}
                    onActivate={onActivate}
                />
            </div>
            <div className="grilla1_2_derecha__image"
                style={{
                    backgroundColor: fondo.state.colorFondo,
                    backgroundImage: fondo.state.imageUrl ? `url(${fondo.state.imageUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    onActivate(e, {
                        id: fondo.state.id,
                        tipo: "fondo",
                        setColorFondo: (c) => fondo.update({ colorFondo: c }),
                        setImageUrl: (u) => fondo.update({ imageUrl: u }),
                        imageUrl: fondo.state.imageUrl
                    });
                }}
            >
            </div>
        </div>
    )
}
export default Grilla1_2_Derecha;
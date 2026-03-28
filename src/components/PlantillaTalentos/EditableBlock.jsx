import { useState } from "react";

function EditableBlock({ data, update, onActivate, className = "" }) {

    const [editandoTexto, setEditandoTexto] = useState(false);

    return (
        <div
            className={`editable-block ${className}`}
            style={{
                backgroundColor: data.colorFondo,
                backgroundImage: data.imageUrl ? `url(${data.imageUrl})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            onClick={(e) => {
                e.stopPropagation();

                onActivate(e, {
                    id: data.id,
                    tipo: "bloque", // 👈 importante

                    setColorFondo: (color) =>
                        update({ colorFondo: color }),

                    setImageUrl: (url) =>
                        update({ imageUrl: url }),

                    imageUrl: data.imageUrl // 👈 esto activa la X
                });
            }}
        >

            <textarea
                className="bloque-texto"
                placeholder="Doble click para escribir"
                value={data.texto}
                onChange={(e) =>
                    update({ texto: e.target.value })
                }
                readOnly={!editandoTexto}
                style={{
                    color: data.colorTexto,
                    fontSize: data.fontSize,
                    fontWeight: data.bold ? "bold" : "normal",
                    fontStyle: data.italic ? "italic" : "normal",
                    textAlign: data.align
                }}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    setEditandoTexto(true);

                    onActivate(e, {
                        tipo: "texto",
                        setColorTexto: (color) =>
                            update({ colorTexto: color }),
                        setFontSize: (size) =>
                            update({ fontSize: size }),
                        toggleBold: () =>
                            update({ bold: !data.bold }),
                        toggleItalic: () =>
                            update({ italic: !data.italic }),
                        setAlign: (align) =>
                            update({ align })
                    });
                }}
            />

        </div>
    );
}

export default EditableBlock;
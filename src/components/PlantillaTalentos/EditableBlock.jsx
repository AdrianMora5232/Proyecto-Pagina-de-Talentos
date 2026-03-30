import { useState, useEffect } from "react";

function EditableBlock({ data, update, onActivate, className = "" }) {

    const [editandoTexto, setEditandoTexto] = useState(false);
    const [loadingImage, setLoadingImage] = useState(false);

    useEffect(() => {
        if (data.imageUrl) {
            setLoadingImage(true);
            const img = new Image();
            img.onload = () => setLoadingImage(false);
            img.onerror = () => setLoadingImage(false);
            img.src = data.imageUrl;
        } else {
            setLoadingImage(false);
        }
    }, [data.imageUrl]);

    return (
        <div
            className={`editable-block ${className}`}
            style={{
                backgroundColor: data.colorFondo,
                backgroundImage: data.imageUrl && !loadingImage
                    ? `url(${data.imageUrl})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                zIndex: 10
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

            {loadingImage && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}

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
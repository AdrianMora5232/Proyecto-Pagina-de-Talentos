import React, { useState } from "react";
import Rating from "@mui/material/Rating";

function Calificacion() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Rating
                name="half-rating"
                value={value}
                precision={0.5} // ⭐ medias estrellas
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

            <p>Valor: {value}</p>
        </div>
    );
}

export default Calificacion;
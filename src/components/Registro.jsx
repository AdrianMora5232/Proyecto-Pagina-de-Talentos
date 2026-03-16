import React from 'react'

function Registro() {






    return (
        <div>
            <h2>Crear cuenta </h2>

            <h3>Nombre Completo</h3>

            <input type="text" />
            <br />
            <h3>Correo electronico</h3>

            <input type="email" />
            <h3>Provicias</h3>

            <select >
                <option >San José</option>
                <option >Alajuela</option>
                <option >Heredia</option>
                <option >Limon</option>
                <option >Guanacaste</option>
                <option >Puntarenas</option>
                <option >Cartago</option>
            </select>
            <h3>Cantón</h3>
            <input type="text" />
            <h3>Distrito</h3>
            <input type="text" />
            <br />
            <button>Crear Cuenta</button>
        </div>
    )
}

export default Registro
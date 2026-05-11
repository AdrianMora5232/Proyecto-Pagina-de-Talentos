import { Navigate } from "react-router-dom"

const RutaPrivadaAdmin = ({ children }) => {
    const idUsuario = localStorage.getItem("idUsuario")
    const rol = localStorage.getItem("rol")

    return (
        <>
            {idUsuario && rol === "Admin" ? children : <Navigate to={"/"} />}
        </>
    )
}
export default RutaPrivadaAdmin
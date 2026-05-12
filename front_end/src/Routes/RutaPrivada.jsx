import { Navigate } from "react-router-dom"

const RutaPrivada = ({ children }) => {
    const idUsuario = localStorage.getItem("idUsuario")

    return (
        <>
            {idUsuario ? children : <Navigate to={"/"} />}
        </>
    )
}
export default RutaPrivada
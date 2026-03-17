import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Principal from "../pages/Principal"
import PerfilUsuario from "../pages/PerfilUsuario"


import PaginadeAdmin from "../pages/PaginadeAdmin"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/perfil-usuario" element={<PerfilUsuario />} />
            </Routes>
        </Router>
    )
}
export default Routing

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Principal from "../pages/Principal"
import PerfilUsuario from "../pages/PerfilUsuario"
import SobreNosotros from "../pages/SobreNosotros"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/perfil-usuario" element={<PerfilUsuario />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            </Routes>
        </Router>
    )
}
export default Routing

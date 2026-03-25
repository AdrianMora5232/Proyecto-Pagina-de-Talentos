import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"
import PaguinaIniciar from "../pages/PaguinaIniciar"
import AgregarUsuario from "../components/AgregarUsuario"
import PaginaRegistro from "../pages/PaginaRegistro"
import Admin from "../pages/Admin"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                 <Route path = "/Admin" element = {<Admin/>} />
                 <Route path="/Iniciar" element={<PaguinaIniciar/>}/>
                 <Route path="/Registro" element={<PaginaRegistro/>}/>
                 <Route path="/AgregarUsuario" element={<AgregarUsuario/>}/>
            </Routes>
        </Router>
    )
}
export default Routing
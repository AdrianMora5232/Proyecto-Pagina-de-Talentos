import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"
import PaguinaIniciar from "../pages/PaguinaIniciar"
import PaginadeAdmin from "../pages/PaginadeAdmin"
import PaginaRegistro from "../pages/PaginaRegistro"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                 <Route path = "Admin" element = {<PaginadeAdmin/>} />
                 <Route path="Iniciar" element={<PaguinaIniciar/>}/>
                 <Route path="Registro" element={<PaginaRegistro/>}/>
            </Routes>
        </Router>
    )
}
export default Routing
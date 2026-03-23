import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Principal from "../pages/Principal"
import PerfilUsuario from "../pages/PerfilUsuario"
import PaginaContacto from "../pages/PaginaContacto"
import SobreNosotros from "../pages/SobreNosotros"
import PaguinaIniciar from "../pages/PaguinaIniciar"

import PaginaRegistro from "../pages/PaginaRegistro"
<<<<<<< HEAD
import Portafolio from "../pages/Portafolio"
=======
import Admin from "../pages/Admin"
>>>>>>> bc20d98108cd0063f42bfe9b74878bd61c81a56e

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
<<<<<<< HEAD
                <Route path="/principal" element={<Principal />} />
                <Route path="/perfil-usuario" element={<PerfilUsuario />} />
                <Route path="/pagina-contacto" element={<PaginaContacto />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                 <Route path = "Admin" element = {<PaginadeAdmin/>} />
                 <Route path="Iniciar" element={<PaguinaIniciar/>}/>
                 <Route path="Registro" element={<PaginaRegistro/>}/>
                <Route path="/portafolio" element={<Portafolio />} />
=======
                 <Route path = "/Admin" element = {<Admin/>} />
                 <Route path="/Iniciar" element={<PaguinaIniciar/>}/>
                 <Route path="/Registro" element={<PaginaRegistro/>}/>
>>>>>>> bc20d98108cd0063f42bfe9b74878bd61c81a56e
            </Routes>
        </Router>
    )
}
export default Routing

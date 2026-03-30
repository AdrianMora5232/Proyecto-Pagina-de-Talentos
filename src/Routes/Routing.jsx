import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Principal from "../pages/Principal"
import PerfilUsuario from "../pages/PerfilUsuario"
import PaginaContacto from "../pages/PaginaContacto"
import SobreNosotros from "../pages/SobreNosotros"
import PaguinaIniciar from "../pages/PaguinaIniciar"
import AgregarUsuario from "../components/AgregarUsuario"
import PaginaRegistro from "../pages/PaginaRegistro"
import Portafolio from "../pages/Portafolio"
import Admin from "../pages/Admin"
import Funcionalidad from "../pages/Funcionalidad"
import RutaPrivada from "./RutaPrivada"
import FormularioConvo from "../pages/FormularioConvo"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                 <Route path="/Iniciar" element={<PaguinaIniciar/>}/>
                 <Route path="/Registro" element={<PaginaRegistro/>}/>
                 <Route path="/AgregarUsuario" element={<AgregarUsuario/>}/>
                <Route path="/principal" element={<RutaPrivada children={<Principal />} />} />
                <Route path="/perfil-usuario" element={<RutaPrivada children={<PerfilUsuario />} />} />
                <Route path="/pagina-contacto" element={<PaginaContacto />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="Iniciar" element={<PaguinaIniciar />} />
                <Route path="/Registro" element={<PaginaRegistro />} />
                <Route path="/portafolio" element={<RutaPrivada children={<Portafolio />} />} />
                <Route path="/Admin" element={<RutaPrivada children={<Admin />} />} />
                <Route path="/Funcionalidad" element={<RutaPrivada children={<Funcionalidad />} />} />
                <Route path="/FormularioConvo" element={<FormularioConvo />} />
            </Routes>
        </Router>
    )
}
export default Routing

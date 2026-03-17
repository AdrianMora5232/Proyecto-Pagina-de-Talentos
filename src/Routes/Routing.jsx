import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "../pages/Inicio"

import PaginadeAdmin from "../pages/PaginadeAdmin"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                 <Route path = "Admin" element = {<PaginadeAdmin/>} />
            </Routes>
        </Router>
    )
}
export default Routing
import Lienzo from "../components/PlantillaTalentos/Lienzo"
import Estructura1_2 from "../components/PlantillaTalentos/Estructura1_2"
import GrillaTriple from "../components/PlantillaTalentos/GrillaTriple"
import Estructura1 from "../components/PlantillaTalentos/Estructura1"
import Estructura1_3 from "../components/PlantillaTalentos/Estructura1_3"

const Portafolio = () => {
    return (
        <div>
            <h2>hola</h2>

            <Lienzo tituloProyecto={"Portafolio"} subtituloProyecto={"Portafolio"} childrenEstructura={

                <div>
                    <p>holaa</p>
                </div>
            }>

            </Lienzo>

            <div>
                <Estructura1 />
            </div>

            <div>
                <Estructura1_2 />
            </div>

            <div>
                <Estructura1_3 />
            </div>

            <div>
                <GrillaTriple />
            </div>







        </div>
    )
}

export default Portafolio
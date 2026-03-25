import "../../styles/PlantillaTalentos/SidebarTalentos.css";

function SidebarTalentos({ actEst1, actEst1_1, actEst1_2, actGrilla1_2_Izda, actGrilla1_2_Derecha }) {
  return (
    <div className="sidebartalentos">

      {/* HEADER */}
      <div className="sidebartalentos__header">
        <div className="sidebartalentos__title">
          <span className="sidebartalentos__icon">▦</span>
          <h6>Plantillas</h6>
        </div>
        <span className="sidebartalentos__badge">EDITOR</span>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        className="sidebartalentos__search"
        placeholder="Buscar componentes..."
      />

      {/* ESTRUCTURAS */}
      <p className="sidebartalentos__section-title">ESTRUCTURAS Y GRILLAS</p>

      <div className="sidebartalentos__grid">
        <div className="sidebartalentos__layout" onClick={actEst1}>
          <div className="sidebartalentos__layout-preview layout-centered">

            <div className="layout-centered__box"></div>

          </div>
          <span>Layout Centrado</span>
        </div>

        <div className="sidebartalentos__layout" onClick={actEst1_1}>
          <div className="sidebartalentos__layout-preview layout-header-column">

            <div className="layout-header-column__top"></div>

            <div className="layout-header-column__bottom"></div>

          </div>
          <span>Layout 1:1</span>
        </div>

        <div className="sidebartalentos__layout" onClick={actEst1_2}>
          <div className="sidebartalentos__layout-preview layout-1-2">
            <div className="layout-1-2__top"></div>
            <div className="layout-1-2__bottom">
              <div></div>
              <div></div>
            </div>
          </div>
          <span>Layout 1:2</span>
        </div>

        <div className="sidebartalentos__layout" onClick={actEst1_1}>
          <div className="sidebartalentos__layout-preview layout-3"></div>
          <span>Grilla Triple</span>
        </div>

        <div className="sidebartalentos__layout" onClick={actGrilla1_2_Izda}>
          <div className="sidebartalentos__layout-preview layout-2"></div>
          <span>Grilla Doble</span>
        </div>

        <div className="sidebartalentos__layout" onClick={actGrilla1_2_Derecha}>
          <div className="sidebartalentos__layout-preview layout-4"></div>
          <span>Mosaico</span>
        </div>
      </div>

      {/* BOTÓN FINAL 
      <button className="sidebartalentos__add-btn">
        + Añadir elemento
      </button>*/}

    </div>
  );
}
export default SidebarTalentos;
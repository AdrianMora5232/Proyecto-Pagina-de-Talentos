import "../../styles/PlantillaTalentos/SidebarTalentos.css";

function SidebarTalentos({actEst1}) {
    return (
    <div className="sidebar p-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="m-0 fw-bold">Plantillas</h6>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar componentes..."
      />

      {/* Sección */}
      <p className="section-title">ESTRUCTURAS Y GRILLAS</p>
      <div className="d-flex gap-2 mb-3">
        <div className="box small  cajita" onClick={actEst1}>est1</div>
        <div className="box small cajita"></div>
        <div className="box small cajita"></div>
      </div>

      {/* Imagen */}
      <p className="section-title">COMPONENTES DE IMAGEN</p>
      <div className="box long mb-2"></div>
      <small className="text-muted d-block mb-3">Tarjeta de Galería</small>

      <div className="box image mb-3"></div>

      {/* Texto */}
      <p className="section-title">BLOQUES DE TEXTO</p>
      <div className="text-line mb-2"></div>
      <div className="text-line short mb-3"></div>

      <small className="text-muted d-block mb-2">Título + Párrafo</small>

      <div className="btn-placeholder mb-4"></div>

    </div>
  );
}
export default SidebarTalentos;
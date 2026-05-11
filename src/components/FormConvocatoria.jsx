import React, { useState } from 'react'
import '../Styles/Formularioconvo.css'
import Fetch from '../services/Fetch'

function FormConvocatoria() {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [tipoTalento, setTipoTalento] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!nombre || !descripcion || !tipoTalento) {
      alert("Por favor completa todos los campos")
      return
    }

    const nuevaConvocatoria = {
      nombre,
      descripcion,
      tipo_talento: tipoTalento,
      fecha: new Date().toISOString()
    }

    try {
      await Fetch.postData(nuevaConvocatoria, "convocatorias")
      alert("Convocatoria enviada al buzón con éxito")
      setNombre('')
      setDescripcion('')
      setTipoTalento('')
    } catch (error) {
      alert("Error al enviar la convocatoria")
    }
  }

  return (
    <div className="convocatoria-container">
      <form className="convocatoria-form" onSubmit={handleSubmit}>
        <h2 className="convocatoria-title">Crear Convocatoria</h2>
        <p className="convocatoria-subtitle">Completa los detalles para tu nueva convocatoria.</p>

        <div className="form-group">
          <label className="form-label">Nombre de la convocatoria</label>
          <input className="form-input" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Búsqueda de talentos 2026" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Descripción</label>
          <textarea className="form-textarea" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4" placeholder="Describe los detalles y requisitos de la convocatoria..."></textarea>
        </div>
        
        <div className="form-group">
          <label className="form-label">Tipos de talentos</label>
          <select className="form-select" value={tipoTalento} onChange={(e) => setTipoTalento(e.target.value)}>
            <option value="">Seleccionar...</option>
            <option value="tecnologias">Tecnologías</option>
            <option value="educacion">Educación</option>
            <option value="danza-canto">Danza - Canto</option>
            <option value="arte-entretenimiento">Arte - Entretenimiento</option>
          </select>
        </div>

        <div className="form-actions">
          <button className="submit-button" type="submit">Enviar Convocatoria</button>
        </div>
      </form>
    </div>
  )
}

export default FormConvocatoria
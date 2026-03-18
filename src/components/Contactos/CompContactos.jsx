import { useState } from "react";
import emailjs from "@emailjs/browser";
import '../../styles/Contactos.css'

const FormularioQuejas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ubicacion: "",
    tipo: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_t3vpdvo",        // Service ID
        "template_stvj6cd",       // Template ID
        {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          ubicacion: formData.ubicacion,
          tipo: formData.tipo,
          mensaje: formData.mensaje,
        },
        "YSCzzK0-G-HDbtBsR"        // Public Key
      );

      setStatus("Mensaje enviado correctamente ✅");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        ubicacion: "",
        tipo: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Error al enviar el mensaje ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactos-form">
      <h2 className="contactos-title">Quejas y Sugerencias</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={formData.nombre}
        onChange={handleChange}
        required
        className="contactos-input"
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="contactos-input"
      />

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        className="contactos-input"
      />

      <input
        type="text"
        name="ubicacion"
        placeholder="Ubicación"
        value={formData.ubicacion}
        onChange={handleChange}
        className="contactos-input"
      />

      <select
        name="tipo"
        value={formData.tipo}
        onChange={handleChange}
        required
        className="contactos-input"
      >
        <option value="">Tipo de mensaje</option>
        <option value="Queja">Queja</option>
        <option value="Sugerencia">Sugerencia</option>
        <option value="Consulta">Consulta</option>
      </select>

      <textarea
        name="mensaje"
        placeholder="Escribe tu mensaje..."
        value={formData.mensaje}
        onChange={handleChange}
        required
        rows={5}
        className="contactos-textarea"
      />

      <button type="submit" disabled={loading} className="contactos-button">
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status && <p className="contactos-status">{status}</p>}
    </form>
  );
};


export default FormularioQuejas;
import React, { useState, useEffect } from "react";
import "../../styles/EstilosPerfilUsuario/InfoUsuarios.css";
import UploadImage from "../PlantillaTalentos/SubirImagen";
import Fetch from "../../services/Fetch";
import { useNavigate } from "react-router-dom";

function InfoUsuario({ usuario, isOwner = false, onUpdate }) {

  const [editando, setEditando] = useState(false);

  const [form, setForm] = useState({
    Nombre: "",
    Correo: "",
    Provincias: "",
    Canton: "",
    Distrito: "",
    img: ""
  });

  const navigate = useNavigate();

  // 🔐 Usuario desde localStorage
  const usuarioStorage = JSON.parse(localStorage.getItem("UsuarioActivo") || "{}");
  const esAdmin = usuarioStorage?.Roles === "Admin";

  // 🔥 FIX PRINCIPAL (SIN LOOP)
  useEffect(() => {
    if (!usuario) return;

    setForm({
      Nombre: usuario.Nombre || "",
      Correo: usuario.Correo || "",
      Provincias: usuario.Provincias || "",
      Canton: usuario.Canton || "",
      Distrito: usuario.Distrito || "",
      img: usuario.img || ""
    });

  }, [usuario?.id]); // ✅ SOLO ID

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleGuardar = async () => {
    try {
      await Fetch.patchData("usuarios", form, usuario.id);
      setEditando(false);
      if (onUpdate) onUpdate();
    } catch (error) {
      console.error("Error actualizando:", error);
    }
  };

  const ubicacion = `${form.Provincias}, ${form.Canton}, ${form.Distrito}`;

  // 🔥 SI NO HAY USUARIO
  if (!usuario) {
    return <p style={{ padding: "20px" }}>Cargando perfil...</p>;
  }

  return (
    <div className="perfil-container">

      {/* IMAGEN */}
      <div className="perfil-img">
        <img src={form.img || "https://via.placeholder.com/150"} alt={form.Nombre} />

        {isOwner && editando && (
          <UploadImage
            setImageUrl={(url) =>
              setForm({ ...form, img: url })
            }
          />
        )}
      </div>

      {/* INFO */}
      <div className="perfil-info">

        {/* NOMBRE */}
        {editando ? (
          <input name="Nombre" value={form.Nombre} onChange={handleChange} />
        ) : (
          <h1>{form.Nombre}</h1>
        )}

        {/* UBICACION */}
        {editando ? (
          <>
            <input name="Provincias" value={form.Provincias} onChange={handleChange} />
            <input name="Canton" value={form.Canton} onChange={handleChange} />
            <input name="Distrito" value={form.Distrito} onChange={handleChange} />
          </>
        ) : (
          <div className="perfil-ubicacion">
            <span className="fa-solid fa-location-dot"></span>
            <p>{ubicacion}</p>
          </div>
        )}

        <h2>Diseñador Creativo y Artista Digital</h2>

        {/* CONTACTO */}
        <div className="perfil-contacto-basic">
          {editando ? (
            <input name="Correo" value={form.Correo} onChange={handleChange} />
          ) : (
            <p><strong>Correo:</strong> {form.Correo}</p>
          )}
        </div>

        {/* BOTONES */}
        <div className="perfil-botones">

          {isOwner && !editando && (
            <button onClick={() => setEditando(true)}>
              ✎ Editar perfil
            </button>
          )}

          {isOwner && editando && (
            <>
              <button onClick={handleGuardar}>💾 Guardar</button>
              <button onClick={() => setEditando(false)}>❌ Cancelar</button>
            </>
          )}

          {/* 🔥 BOTÓN ADMIN */}
          {esAdmin && (
            <button onClick={() => navigate("/admin")}>
              🛠 Panel Admin
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default InfoUsuario;
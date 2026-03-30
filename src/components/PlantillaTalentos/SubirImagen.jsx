//import { useImage } from "./HookImagenCloudinary";
import { useRef } from "react";

function UploadImage({ setImageUrl }) {
  //const { setImageUrl } = useImage();
  const inputRef = useRef();

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "imagenes"); 

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dyy1yqvbv/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();
      setImageUrl(result.secure_url); 

    } catch (error) {
      console.error("Error subiendo imagen:", error);
    }
  };

  return (
     <>
      {/* INPUT OCULTO */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleUpload}
        style={{ display: "none" }}
      />

      {/* ICONO QUE ABRE EL INPUT */}
      <span onClick={() => inputRef.current.click()}>
        <i className="fa-regular fa-image"></i>
      </span>
    </>
  );
}

export default UploadImage;
import { useImage } from "./HookImagenCloudinary";

function UploadImage() {
  const { setImageUrl } = useImage();

  const handleUpload = async (e) => {
    const file = e.target.files[0];

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
    <input type="file" onChange={handleUpload} />
  );
}

export default UploadImage;
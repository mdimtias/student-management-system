import { useState } from "react";

const useImageUpload = (preset:string) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (imageFile:any) => {
    setLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", preset);
    
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const imageUrl = data.secure_url;
      setUrl(data.secure_url);
      setImage(imageFile);
      setLoading(false);
      return imageUrl;
    } catch (error:any) {
      setError(error);
      setLoading(false);
    }
  };

  return { image, url, error, loading, uploadImage };
};

export default useImageUpload;
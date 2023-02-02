import React, { useState } from "react";
import useImageUpload from "../../hooks/useImageUpload";

const TestImageUpload = () => {
  const [file, setFile] = useState(null);
  const { url, error, loading, uploadImage } = useImageUpload("profilePhoto");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit =async  (event) => {
    event.preventDefault();
    await uploadImage(file);
    console.log(url)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit" onClick={(e)=>handleSubmit(e)} disabled={loading}>
        Upload
      </button>
      {error && <p>Error: {error.message}</p>}
      {url && <img src={url} alt="Uploaded" />}
    </form>
  );
};

export default TestImageUpload;
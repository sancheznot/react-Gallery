import axios from "axios";
import React, { useState, useEffect } from "react";
import { localhost } from "../index";
import { useNavigate } from 'react-router-dom';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    async function fetchImage() {
      const res = await axios.get(`${localhost}/images/upload`);
      setImages(res.data);
    }
    fetchImage();
  }, []);

  return (
    <div className="row ">
      {images.map((image) => (
        <div
          className="col-md-4 card-image p-1"
          onClick={() =>
            history(`images/details/${image._id}`)
          }
          key={image._id}
        >
          <img
            src={image.url}
            alt={image.name}
            className="img-fluid h-100 w-100 "
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

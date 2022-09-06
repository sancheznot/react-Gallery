import React, { useState } from "react";
import { localhost } from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageForm = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [uploadPercent, setUploadPercent] = useState(0);
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const handleOnchange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    await axios.post(`${localhost}/images/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress(progressEvent) {
        const { total, loaded } = progressEvent;
        const percentage = parseInt((loaded * 100) / total);
        setUploadPercent(percentage);
      },
    });
    
    setTimeout(() => {
      setLoading(false)
      history("/");
    }, 2000);
  };


  return (
    <div className="col-md-4 offset-md-4">
      {loading && (
        <div className="progress rounded-0">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Example with label"
            style={{ width: `${uploadPercent}%` }}
          >
            {uploadPercent}%
          </div>
        </div>
      )}
      <div className="card bg-dark text-light rounded-0 p-4">
        <div className="card-body">
          <h3>Upload Image</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control bg-dark text-light my-3"
              placeholder="Write a title for your photo"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="file"
              className="form-control-bg-dark text-light"
              required
              onChange={handleOnchange}
            />
            <button
              className="btn btn-success w-100 rounded-0 mt-2 "
              id="button"
            >
              Uploded Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;

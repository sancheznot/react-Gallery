import React, { useState, useEffect} from 'react'
import { localhost } from "../index";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'


const ImageDetails = () => {

  const [image, setImage] = useState({
    title: "",
    url: "",
    _id: "",
  });
  const params = useParams();
  const history = useNavigate()

  useEffect(() =>{ 
    (async () => { 
      const res = await axios.get(`${localhost}/images/uploaded/${params.id}`)
      setImage(res.data)
    })();
  }, [params.id])
 
const handleDelete = async () => {
   await axios.delete(`${localhost}/images/uploaded/${params.id}`)
    history('/')
}


  return (
    <div className='row'>
        <div className="col-md-4 offset-md-4">
          <div className="card bg-dark h-100 w-100">
              <img src={image.url} alt={image.name} className="card-img-top " />
            <div className="card-body">
                <h1>{image.title}</h1>
                <button className="btn btn-outline-danger" 
                onClick={handleDelete}
                >
                  Delete
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageDetails
import { Route, Routes } from "react-router-dom";
import ImageDetails from "./pages/ImageDetails";
import ImageForm from "./pages/ImageForm";
import ImageGallery from "./pages/ImageGallery";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" exact element={<ImageGallery />} />
          <Route path="/images/details/:id" element={<ImageDetails />} />
          <Route path="/upload" element={<ImageForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

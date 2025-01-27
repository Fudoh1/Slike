import {useState} from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import "./style.css";

function App() {
   const [images, setImages] = useState([]);

   const handleSubmit = async (term) => {
   const result = await searchImages(term);

   setImages(result);
   };
   return <div className="app-container">
   <SearchBar onSubmit={handleSubmit} />
   <ImageList images={images} />
   </div>;
}

export default App;
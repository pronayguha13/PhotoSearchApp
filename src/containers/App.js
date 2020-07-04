import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./App.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { API_KEY } from "../api";
import Gallery from "../components/photoGallery";

const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("scenary");
  const [isLoading, setIsLoading] = useState(true);

  const setPhotoHandler = (photos) => {
    setPhotos(photos);
    setIsLoading(false);
  };
  useEffect(() => {
    if (query.length) {
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&per_page=10&conntent_type=1&format=json&nojsoncallback=1`
        )
        .then((res) =>
          res.data.photos === undefined
            ? setPhotos(undefined)
            : setPhotoHandler(res.data.photos.photo)
        );
    }
  }, [query]);

  const searchImageHandler = (queryString) => {
    setQuery(queryString);
  };

  return (
    <div className={style.App}>
      <h1> Snap Shot</h1>
      <SearchBar queryHandler={searchImageHandler} />
      <Gallery images={photos} isLoading={isLoading} />
    </div>
  );
};
export default App;

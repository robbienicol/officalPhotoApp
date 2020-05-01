import React from "react";
import { retrieveImagesByCategory } from "../axiosInstance";

const Search = ({ imageGallery }) => {
  return (
    <div>
      <h1>Results:</h1>
      {imageGallery}
    </div>
  );
};

export default Search;

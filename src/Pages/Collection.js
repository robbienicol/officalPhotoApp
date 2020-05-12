import React, { useState, useEffect } from "react";
import { retrieveImagesByCategory } from "../components/axiosInstance";
import Photos from "../components/Photos";
import queryString from "query-string";

export const Collection = (props) => {
  const [images, setImages] = useState([]);

  const values = queryString.parse(props.location.search);
  async function getImages() {
    try {
      const response = await retrieveImagesByCategory(values.query);
      setImages(response.data.results);
    } catch (error) {}
  }

  useEffect(() => {
    getImages();
  }, [values.query]);

  if (images.length === 0) {
    return (
      <p style={{ color: "grey" }}>
        Sorry, your search was trash, try something else
      </p>
    );
  }
  return (
    <div>
      <Photos images={images} />

      <br />
    </div>
  );
};

export default Collection;

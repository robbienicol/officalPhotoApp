import React, { useState, useEffect } from "react";
import { retrieveImagesByCategory } from "../components/axiosInstance";
import Photos from "../components/Photos";
import queryString from "query-string";

const Collection = (props) => {
  const values = queryString.parse(props.location.search);
  const [images, setImages] = useState([]);
  async function loadImgSyntax() {
    try {
      const response = await retrieveImagesByCategory(values.query);
      setImages(response.data.results);
    } catch (error) {}
  }
  useEffect(() => {
    loadImgSyntax();
  }, [values.query]);

  return (
    <div>
      <Photos images={images} />

      <br />
    </div>
  );
};

export default Collection;

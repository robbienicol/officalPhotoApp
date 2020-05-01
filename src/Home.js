import React, { useRef, useState, useEffect } from "react";
import Search from "../src/Pages/Search";
import { Route } from "react-router-dom";
import { retrieveImagesByCategory } from "./axiosInstance";
import Photos from "./components/Photos";

const Home = (props) => {
  const Ref = useRef("");
  const [images, setImages] = useState([]);
  async function loadImgSyntax() {
    try {
      const response = await retrieveImagesByCategory("random");
      setImages(response.data.results);
    } catch (error) {}
  }
  useEffect(() => {
    loadImgSyntax();
  }, []);

  const handleSubmit = () => {
    props.history.push(`collection?query=${Ref.current.value}`);
  };
  const photoGallery = images.map((img) => {
    return (
      <img
        width="500"
        height="500"
        onClick={() => {
          console.log(img);
        }}
        src={img.urls.small}
        alt="beach"
      />
    );
  });
  return (
    <div>
      <div className="home">
        <h1> Robbie's Cool Pic Finder.</h1>
        <h3>Search for whatever picture your in the mood for.</h3>
        <h4>Using this Wonderful Website.</h4>
        <form onSubmit={handleSubmit}>
          <input
            ref={Ref}
            className="textbox2"
            type="textbox"
            placeholder="Search..."
          />
        </form>
      </div>
      <h1>Random Pictures</h1>
      <br />
      {photoGallery} <Route path="/s" component={Search} />
    </div>
  );
};

export default Home;

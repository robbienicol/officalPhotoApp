import React, { useRef, useState, useEffect } from "react";
import { retrieveImagesByCategory } from "../components/axiosInstance";
import searchAndNavigate from "../components/useSearch";

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
    searchAndNavigate(props.history, Ref.current.value);
  };

  const photoGallery = images.map((img) => {
    return (
      <div class="container">
        <img
          width="400"
          height="400"
          onClick={() => {
            console.log(img);
          }}
          src={img.urls.small}
          alt="beach"
        />
        <div class="overlay">
          <div class="textCard">
            <p> {img.alt_description}</p>
            <p>Date: {img.created_at}</p>
            <p>Likes: {img.likes}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="home">
        <h1> Robbie's Cool Pic Finder.</h1>
        <h3>Search for whatever picture your in the mood for.</h3>
        <h4>Using this Wonderful Website.</h4>
        <form id="bigSearch" onSubmit={handleSubmit}>
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
      {photoGallery}
    </div>
  );
};

export default Home;

import React from "react";

const Photos = ({ images, photoGallery }) => {
  //maps through the useState images, and makes the images render
  const imageGallery = images.map((img) => {
    return (
      <div class="container">
        <img width="400" height="400" src={img.urls.small} alt="beach" />{" "}
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
      <h1 className="filler"> Cool Pictures</h1>
      <br />

      {imageGallery}
    </div>
  );
};

export default Photos;

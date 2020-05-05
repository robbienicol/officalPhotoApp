import React from "react";

const Photos = ({ images, photoGallery }) => {
  const imageGallery = images.map((img) => {
    if (img.urls.small === 0) {
      return <p>"sorry"</p>;
    }
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

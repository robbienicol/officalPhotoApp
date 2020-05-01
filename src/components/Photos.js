import React from "react";

const Photos = ({ images }) => {
  const imageGallery = images.map((img) => {
    return (
      <img
        width="400"
        height="400"
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
      <h1 className="filler"> Cool Pictures</h1>
      <br />

      {imageGallery}
    </div>
  );
};

export default Photos;

import React, { useState } from "react";

const Profile = () => {
  const [counter, setCounter] = useState(0);

  const Liked = () => {
    console.log(Liked);
    return (
      <div>
        <h1>Liked Pictures</h1>
        <img
          width="200"
          height="200"
          alt="cool"
          src="https://image.shutterstock.com/image-illustration/crinkle-cut-pulse-blue-pink-260nw-1270991782.jpg"
        />
        &nbsp;
        <img
          alt="fun"
          width="200"
          height="200"
          src="https://thumbs.dreamstime.com/b/swirling-rainbow-effect-multicolored-trippy-psychedelic-abstract-swirling-rainbow-effect-multicolored-trippy-psychedelic-abstract-155020612.jpg"
        />
        &nbsp;
        <img
          alt="fun"
          width="200"
          height="200"
          src="https://images.unsplash.com/photo-1536029058117-75fb5c1c4c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    );
  };

  return (
    <div className="profile">
      <h1>Dave TheDude</h1>
      <img
        style={{ float: "middle" }}
        src="https://images.squarespace-cdn.com/content/v1/5d4ee8903899ab0001d52180/1585691887033-Z97OMSGA4C2TRTIHYGJY/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Jeff+Circle.png"
        alt="hey"
        width="200"
        height="200"
      />
      <h4>Hi, im Dave! I love iceFishing and taking my cat for a walk.</h4>
      <hr></hr>
      <div style={{ float: "left", color: "grey" }}>
        <button onClick={() => setCounter(1)}>
          <svg
            class="DhJsa"
            version="1.1"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            aria-hidden="false"
          >
            <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
          </svg>
          <span>Likes</span>
          <span class="x543r">
            &nbsp;
            <span>{counter}</span>
          </span>
        </button>
      </div>
      <div>
        <h1>Liked Pictures</h1>
        <img
          width="200"
          height="200"
          alt="cool"
          src="https://image.shutterstock.com/image-illustration/crinkle-cut-pulse-blue-pink-260nw-1270991782.jpg"
        />
        &nbsp;
        <img
          alt="fun"
          width="200"
          height="200"
          src="https://thumbs.dreamstime.com/b/swirling-rainbow-effect-multicolored-trippy-psychedelic-abstract-swirling-rainbow-effect-multicolored-trippy-psychedelic-abstract-155020612.jpg"
        />
        &nbsp;
        <img
          alt="fun"
          width="200"
          height="200"
          src="https://images.unsplash.com/photo-1536029058117-75fb5c1c4c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
};

export default Profile;

import React, { useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  const Ref = useRef("");
  console.log(props);
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`collection?query=${Ref.current.value}`);
  };
  return (
    <div>
      <br />
      <Link to="/">
        <img
          src="https://i.vippng.com/png/small/209-2093905_caricature-carita-face-cute-colorful-happy-feliz-trippy.png"
          alt="hey"
          width="50"
          height="50"
          style={{ float: "left" }}
        />
      </Link>
      <div>
        <form id="bigg" onSubmit={handleSubmit}>
          <input
            className="textbox"
            ref={Ref}
            onChange={(e) => setSearchText(e.target.value)}
            type="textbox"
            placeholder="Search..."
          />
        </form>
      </div>{" "}
      &nbsp; &nbsp;
      <Link to="/profile">
        <img
          style={{ float: "right" }}
          src="https://images.squarespace-cdn.com/content/v1/5d4ee8903899ab0001d52180/1585691887033-Z97OMSGA4C2TRTIHYGJY/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Jeff+Circle.png"
          alt="hey"
          width="70"
          height="70"
        />
      </Link>
    </div>
  );
};

export default withRouter(Header);

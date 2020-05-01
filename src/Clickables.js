import React from "react";
import { Link } from "react-router-dom";

const Clickables = () => {
  return (
    <div>
      <br />
      <Link className="click" to="/collection?query=surf">
        Surfing
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=skate">
        Skating
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=basketball">
        Basketball
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=beer">
        Beers
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=concerts">
        Concerts
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=guitar">
        Guitars
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=drums">
        Drums
      </Link>
      &nbsp;
      <Link className="click" to="/collection?query=sand">
        Sand
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Clickables;

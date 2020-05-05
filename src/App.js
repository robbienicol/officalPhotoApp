import React, { useRef } from "react";
import "./App.css";
import Header from "../src/Pages/Header";
import Clickables from "./Clickables";
import { Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home";
import Collection from "./Pages/Collection";

import Profile from "../src/Pages/Profile";

function App(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`collection?query=${e}`);
  };
  return (
    <div className="App">
      <Header />
      <Clickables />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

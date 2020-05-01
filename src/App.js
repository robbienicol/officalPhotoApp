import React, { useRef } from "react";
import "./App.css";
import Header from "./Header";
import Clickables from "./Clickables";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Collection from "./Pages/Collection";

import Profile from "../src/Pages/Profile";

function App(props) {
  const Ref = useRef("");

  const handleSubmit = () => {
    props.history.push(`collection?query=${Ref.current.value}`);
  };
  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} />
      <Clickables />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/s" component={Search} /> */}
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Route } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import Home from "./components/index";
import "./App.css";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseLine />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;

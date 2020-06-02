import React from "react";
import { Route } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import Home from "./components/index";
import "./App.css";
import Resume from "./components/Resume.jsx";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      {/* <CssBaseLine /> */}
      <Route exact path={process.env.PUBLIC_URL} component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";

// Importing React-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing Components
import Navbar from "./App/Components/Navbar/Navbar";

// Importing Pages
import Home from "./App/Pages/Home/Home";
import Area from "./App/Pages/Area/Area";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/area" component={Area} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

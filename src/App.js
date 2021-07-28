import React from "react";
import "./App.css";

// Importing React-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing Components
import Navbar from "./App/Components/Navbar/Navbar";

// Importing Pages
import Home from "./App/Pages/Home/Home";
import Area from "./App/Pages/Area/Area";
import Perimeter from "./App/Pages/Perimeter/Perimeter";
import Quiz from "./App/Pages/Quiz/Quiz";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/area" component={Area} />
          <Route path="/perimeter" component={Perimeter} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

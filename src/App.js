import React, { Component, useState, useEffect, useContext } from "react";
import Header from "./components/header";
import CV from "./components/cv";
import Contact from "./components/contact";
import Front from "./components/front";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <nav class="tool">
          <img
            src="https://andrewroar.github.io/portfolio/image/toppng.com-shiba-inu-icon-shiba-icon-1235x1268.png"
            alt="toolbar background"
            class="logo"
          />
          <ul>
            <li style={{ "text-decoration": "none", color: "inherit" }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ "text-decoration": "none", color: "inherit" }}>
              <Link to="/cv">CV</Link>
            </li>
            <li style={{ "text-decoration": "none", color: "inherit" }}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <hr />
          <Switch>
            <Route exact path="/">
              <Front />
            </Route>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

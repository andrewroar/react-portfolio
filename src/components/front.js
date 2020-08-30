import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Front() {
  return (
    <div class="contact-flex ">
      <div class="card-flex-div card center">
        <div class="card-container">
          <h2>Welcome to Andrew's Portfolio</h2>
        </div>
      </div>
    </div>
  );
}

export default Front;

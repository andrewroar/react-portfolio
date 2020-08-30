import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Contact() {
  return (
    <div class="card-flex-div card center">
      <div class="card-container">
        <h4>
          <b>Contact</b>
        </h4>
        <h5>
          <b>Email:</b>
        </h5>
        <p>andrewshout@gmail.com</p>
        <h5>
          <b>Phone:</b>
        </h5>
        <p>07460377519</p>
        <h5>
          <b>Linkedin:</b>
        </h5>
        <p>
          <a
            href="https://www.linkedin.com/in/andrew-chung-man-wong-54129b132/"
            style={{ color: "inherit" }}
          >
            Click Here
          </a>
        </p>
        <form action="mailto:andrewshout@gmail.com">
          <button type="”submit”">Email Me</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

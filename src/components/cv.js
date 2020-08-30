import React, { useState } from "react";
//import "./style.css";
import Header from "./header";

function CV() {
  return (
    <div>
      <Header />
      <container class="body-flex">
        <div class="body-flex-div card">
          <div class="card-container">
            <img
              src="https://andrewroar.github.io/portfolio/image/profile-pic.jpg"
              alt="Avatar"
              class="profile-pic"
            />
            <h4>
              <b>Andrew Wong</b>
            </h4>
            <h5>
              <b>About Me</b>
            </h5>
            <p>
              Graduated from University of York, currently studying about webdev
              in University of Manchester coding bootcamp
            </p>
            <p>
              Github:
              <a href="https://github.com/andrewroar">
                https://github.com/andrewroar
              </a>
            </p>
          </div>
        </div>
        <div class="body-flex-div card">
          <div class="card-container">
            <h4>
              <b>Overview</b>
            </h4>
            <p>Good Knowledge on the following language/technology</p>
            <ul>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>MySQL/NoSQL</li>
              <li>Express</li>
            </ul>
            <p>Native Cantonese and Fluent Mandarin Chinese</p>
            <p>
              Masters Degrees (York) Politics, Philosophy Economics and
              International Political Economy{" "}
            </p>
            <p>
              Knowledge of MS Office applications, including basic Excel data
              analysis skill
            </p>
          </div>
        </div>
        <div class="body-flex-div card">
          <div class="card-container">
            <h4>
              <b>Experience</b>
            </h4>

            <h5>KVB PRIME, Manchester (Nov 2019 – Current)</h5>
            <p>Marketing Communication Executive</p>

            <h5>Huawei, Reading (June 2019- Oct 2019)</h5>
            <p>Project Coordinator</p>

            <h5>NHS Interpreter (January 2018- January 2019)</h5>
            <p>Freelancing Interpreter</p>
          </div>
        </div>

        <div class="body-flex-div card">
          <div class="card-container">
            <h4>
              <b>Education</b>
            </h4>

            <p>
              University of York, MA. International Political Economy 2017-
              Sep,2018 (merit)
            </p>

            <p>
              University of York, MA. Politics Economics and Philosophy:
              Economics and Development (Pass) 2016- Oct,2017
            </p>

            <p>
              University of York, BA. Politics, Economics and Philosophy (Lower
              Second Honour under mitigating circumstance) 2013-2016
            </p>
          </div>
        </div>

        <div class="body-flex-div card">
          <div class="card-container">
            <h4>
              <b>Certification</b>
            </h4>

            <h5>
              <b>University of Manchester Coding Bootcamp </b>
            </h5>
            <p>
              Module: Javascript, CSS, NodeJS, MySQL and other web development
              related subject
            </p>
            <p>Projects: https://github.com/andrewroar</p>

            <h5>
              <b>University of Manchester Coding Bootcamp </b>
            </h5>
            <p>
              Module: Javascript, CSS, NodeJS, MySQL and other web development
              related subject
            </p>
            <p>Projects: https://github.com/andrewroar</p>
          </div>
        </div>
      </container>
    </div>
  );
}

export default CV;

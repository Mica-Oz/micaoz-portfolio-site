import React from "react";
import headshot from "./mica-sq.jpeg";
import "./About.css";
import Checker1 from "./checker1.js";
import { Link } from "react-router-dom";
import home from "./left-arrow.svg";

function About() {
  return (
    <div id="flex">
      <div id="abtLogo">
        <Link to="/">
          <img src={home} alt="home" />
        </Link>
      </div>
      <div id="split">
        <div id="left">
          <h1 id="about">MICA OZ</h1>
          <img src={headshot} alt="me" />
        </div>
        <div id="right">
          <h3 id="some">Some things you might be wondering</h3>
          <h3 id="me">about me:</h3>
          <div id="aboutContainer">
            <h4> + I’m a Full Stack Software Engineer and Visual Artist.</h4>
            <h4> + I’m currently located in Carbondale, Colorado.</h4>
            <h4>
              {" "}
              + My last name is Oszczakiewicz, pronounced osh-cha-kev-itch, but
              please don’t hurt yourself. Oz for short is just fine.
            </h4>
            <h4>
              {" "}
              + My mediums include, but are not limited to: code, digital
              graphics, motion graphics, paint, animation, light, and
              environment.
            </h4>
            <h4>
              {" "}
              + I periodically do freelance dev or design work for the right
              project. If you think we are a good fit, feel free to hit my{" "}
              <a href="mailto:mica.oszczakiewicz@gmail.com" id="inlineButton">
                line.
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div id="graphic">
        <Checker1 />
      </div>
    </div>
  );
}

export default About;

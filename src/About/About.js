import React from "react";
import headshot from "./me.jpeg";
import "./About.css";

function About() {
  return (
    <div id="flex">
      <div id="split">
        <div id="left">
          <h1>ABOUT</h1>
          <img src={headshot} alt="me" />
        </div>
        <div id="right">
          <h3>Some things you might be wondering</h3>
          <h3>about me:</h3>
          <p>
            •I’m a Full Stack Software Engineer and Visual Artist. <br />
            •I’m currently located in Carbondale, Colorado. <br />
            •My last name is Oszczakiewicz, pronounced osh-cha-kev-itch, but
            please don’t hurt yourself. Oz for short is just fine. <br />
            •My mediums include, but are not limited to: code, digital graphics,
            motion graphics, paint, animation, light, and environment. <br />
            •I periodically do freelance dev or design work for the right
            project. If you think we are a good fit, feel free to hit my{" "}
            <button id="inlineButton">line</button>
          </p>
        </div>
      </div>
      <div id="graphic"></div>
    </div>
  );
}

export default About;

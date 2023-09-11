import React from "react";
import "./rotoflo.css";

function Rotoflo() {
  return (
    <div id="rotofloFlex">
      <div id="projHeader">
        <h3 id="title">ROTOFLO</h3>
        <h3>
          {" "}
          A motion interactive AR experience. Rotoflo leverages machine learning
          to generate dynamic, algorithmic, full body filters, allowing users to
          save and share stunning and expressive video content.{" "}
        </h3>
        <div id="links">
          <h3>
            <a href="www.rotoflo.herokuapp.com">APPLICATION</a>
          </h3>
          <h3>
            <a href="https://github.com/GH-Team-Coconut/RotoFlo">REPOSITORY</a>
          </h3>

          <h3>
            <a href="https://www.youtube.com/watch?v=ijz9nGKCrkI&t=2s">
              GOOGLE - TENSORFLOW.JS INTERVIEW
            </a>
          </h3>
        </div>
      </div>
      <div id="body">
        <div id="projectPlayer">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/A9LnAh6N1rY?si=p1Q6DyneHPA4LhfY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Rotoflo;

import React from "react";
import "./rotoflo.css";

function Rotoflo() {
  return (
    <div id="rotofloFlex">
      <div id="projHeader">
        <h4>FEATURED</h4>
        <h2>
          {" "}
          Watch an interview of the developers behind Rotoflo, by developer
          advocates at Google, for their AI model TensorFlow.js.
        </h2>
      </div>
      <div id="body">
        <div id="projectPlayer">
          <iframe
            src="https://www.youtube.com/embed/ijz9nGKCrkI?si=1IYpyZJeKJhqOidf"
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

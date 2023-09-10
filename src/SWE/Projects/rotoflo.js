import React from "react";
import "./rotoflo.css";
import PropTypes from "prop-types";

function Rotoflo() {
  return (
    <div id="rotofloFlex">
      <div id="header">
        <h3>Title: ROTOFLO</h3>
        <h3>
          Link: <a href="www.rotoflo.herokuapp.com">ROTOFLO</a>
        </h3>
        <h3>
          Description: A motion interactive AR experience. Rotoflo leverages
          machine learning to generate dynamic, algorithmic, full body filters,
          allowing users to save and share stunning and expressive video
          content.{" "}
        </h3>
        <h3>
          Press:{" "}
          <a href="https://www.youtube.com/watch?v=ijz9nGKCrkI&t=2s">
            Google - Tensorflow.js Interview
          </a>
        </h3>
      </div>
      <div id="body">
        <div id="prpjectPlayer">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/watch?v=A9LnAh6N1rY`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
}
export default Rotoflo;

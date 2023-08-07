/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect, useRef } from "react";

import "./Block1.css";

function Block1() {
  return (
    <div id="block">
      <p id="name">MICA OZ</p>
      <div id="marquee">
        <div className="scrollText">
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
        </div>
        <div className="scrollText" aria-hidden="true">
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
          <span> ART // COMPUTERS //</span>
        </div>
      </div>
    </div>
  );
}

export default Block1;

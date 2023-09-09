import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Block8.css";

function Block8() {
  const [itemOneOpen, setitemOneOpen] = useState(false);

  useEffect(() => {
    console.log(itemOneOpen);
  });

  function portfolioToggleHandler() {
    setitemOneOpen(!itemOneOpen);
    console.log("click");
  }

  return (
    <div id="block8">
      {itemOneOpen ? (
        <div>
          <Link className="link" id="selected" onClick={portfolioToggleHandler}>
            <h1>PORTFOLIO</h1>
          </Link>
          <Link className="link" id="art" to="/construction">
            <h2>ART</h2>
          </Link>
          <Link className="link" id="swe" to="/swe">
            <h2>SWE</h2>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="link"
            id="unselected"
            onClick={portfolioToggleHandler}
          >
            <h1>PORTFOLIO</h1>
          </Link>
        </div>
      )}

      <div>
        <Link
          className="link"
          id="unselected"
          to="/about"
          onClick={portfolioToggleHandler}
        >
          <h1>ABOUT</h1>
        </Link>
      </div>
    </div>
  );
}

export default Block8;

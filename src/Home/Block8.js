import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Block8.css";

function Block8() {
  const [itemOneOpen, setitemOneOpen] = useState(false);

  function portfolioToggleHandler() {
    setitemOneOpen(!itemOneOpen);
    console.log("click");
  }

  return (
    <div id="block8">
      {itemOneOpen ? (
        <div>
          <Link className="link" onClick={portfolioToggleHandler}>
            <h1>PORTFOLIO</h1>
          </Link>
        </div>
      ) : (
        <div>
          <Link className="link" id="selected" onClick={portfolioToggleHandler}>
            <h1>PORTFOLIOO</h1>
          </Link>
          <Link className="link" id="art" to="/gallery">
            <h1>ART</h1>
          </Link>
          <Link className="link" id="swe" to="/gallery">
            <h1>SWE</h1>
          </Link>
        </div>
      )}

      <div>
        <Link className="link" to="/" onClick={portfolioToggleHandler}>
          <h1>ABOUT</h1>
        </Link>
      </div>
    </div>
  );
}

export default Block8;

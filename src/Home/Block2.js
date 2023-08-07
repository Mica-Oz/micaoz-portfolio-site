import React, { useEffect, useRef } from "react";

import "./Block2.css";
import igicon from "./instagram.svg";
import liicon from "./linkedin.svg";
import giticon from "./github.svg";
import vicon from "./vimeo.svg";
import yticon from "./youtube.svg";

function Block2() {
  return (
    <div id="block2">
      <div id="row1">
        <a className="icon" id="insta" href="https://www.instagram.com/mica.oz">
          <img className="svg" alt="ig" src={igicon} />
        </a>

        <a
          className="icon"
          id="linkedin"
          href="https://www.linkedin.com/in/mica-oz/"
        >
          <img classname="svg" alt="ig" src={liicon} />
        </a>

        <a className="icon" id="github" href="https://github.com/Mica-Oz">
          <img alt="NL" src={giticon}></img>
        </a>
      </div>

      <div id="row2">
        <a className="icon" id="vimeo" href="https://vimeo.com/322292310">
          <img alt="vimeo" src={vicon}></img>
        </a>
        <a
          className="icon"
          id="yt"
          href="https://www.youtube.com/watch?v=ijz9nGKCrkI"
        >
          <img alt="yt" src={yticon}></img>
        </a>
      </div>
    </div>
  );
}

export default Block2;

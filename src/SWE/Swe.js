import React, { useEffect, useState } from "react";
import "./swe.css";
import { Link } from "react-router-dom";
import home from "../About/left-arrow.svg";
import Port from "./Projects/port.js";
import Rotoflo from "./Projects/rotoflo.js";
import AVL from "./Projects/avl.js";
import Botanik from "./Projects/botanik.js";
import Doodad from "./Projects/doodad.js";
import GAP from "./Projects/gap.js";
import Stackathon from "./Projects/stackathon.js";
import Featured from "./Projects/featured.js";
import Soon from "./Projects/soon";

function SWE() {
  const [project, setProject] = useState("featured");

  function projectSelect(proj) {
    setProject(proj);
  }

  return (
    <div id="flex">
      <div id="sweSplit">
        <div id="sweNav">
          <div id="abtLogo">
            <Link to="/">
              <img src={home} alt="home" />
            </Link>
          </div>
          <button
            className="navProj"
            value="port"
            id="port"
            onClick={(e) => projectSelect(e.target.value)}
          >
            PORTFOLIO SITE
          </button>
          <button
            className="navProj"
            value="rotoflo"
            id="rotoflo"
            onClick={(e) => projectSelect(e.target.value)}
          >
            ROTOFLO
          </button>
          <button
            className="navProj"
            value="avl"
            id="avl"
            onClick={(e) => projectSelect(e.target.value)}
          >
            ASPEN VALLEY LAW
          </button>
          <button
            className="navProj"
            value="botanik"
            id="botanik"
            onClick={(e) => projectSelect(e.target.value)}
          >
            BOTANIK
          </button>

          <button
            className="navProj"
            value="doodad"
            id="doodad"
            onClick={(e) => projectSelect(e.target.value)}
          >
            DADA DOODAD
          </button>

          <button
            className="navProj"
            value="gap"
            id="gap"
            onClick={(e) => projectSelect(e.target.value)}
          >
            GRAY AREA PROJECTS
          </button>
          <button
            className="navProj"
            value="stackathon"
            id="stackathon"
            onClick={(e) => projectSelect(e.target.value)}
          >
            STACKATHON
          </button>
        </div>

        <div id="sweViewer">
          {
            {
              port: <Soon />,
              rotoflo: <Rotoflo />,
              avl: <Soon />,
              botanik: <Soon />,
              doodad: <Soon />,
              gap: <Soon />,
              stackathon: <Soon />,
              featured: <Featured />,
            }[project]
          }
        </div>
      </div>
    </div>
  );
}

export default SWE;

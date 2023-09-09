import React, { useEffect, useState } from "react";
import "./swe.css";
import { Link } from "react-router-dom";
import home from "../About/left-arrow.svg";

function SWE() {
  const [project, setProject] = useState("begin");

  function projectSelect(proj) {
    setProject(proj);
  }
  function renderSwitch(p) {
    switch (p) {
      case "port":
        return "port";
      case "rotoflo":
        return "roto";
      case "AVL":
        return "avl";
      case "botanik":
        return "botanik";
      case "doodad":
        return "doodad";
      case "GAP":
        return "GAP";
      case "stackathon":
        return "stackathon";
      default:
        return null;
    }
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
            value="AVL"
            id="AVL"
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
            value="GAP"
            id="GAP"
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

        <div id="sweViewer">{renderSwitch(project)}</div>
      </div>
    </div>
  );
}

export default SWE;

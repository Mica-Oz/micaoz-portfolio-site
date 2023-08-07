/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect, useRef } from "react";

import "./home.css";
import Block1 from "./Block1.js";
import Block2 from "./Block2.js";
import Block4 from "./Block4.js";
import Block6 from "./Block6.js";
import Block7 from "./Block7.js";
import Block8 from "./Block8.js";
import Block13 from "./Block13.js";

function Home() {
  return (
    <div className="flex">
      <div className="App">
        <div id="Row1">
          <Block1 id="Block1" />
          <Block2 id="Block1" />
        </div>
        <div id="Row2">
          <div id="Block3">
            {/* this div will have a custom frame by frame animation appear on hover */}
          </div>
          <Block4 id="Block4" />
          <div id="Block5">
            {/* this div will have color changing onClick functionality and one square will have an easter egg */}
          </div>
        </div>
        <div id="Row3">
          <div id="LeftHunk">
            <div id="LHunkRow1">
              <Block6 id="Block6" />
              <Block7 id="Block7" />
            </div>
            <div id="LHunkRow2">
              <div id="Block10"></div>
              <div id="Block11"></div>
            </div>
            <div id="Block12"></div>
          </div>
          <Block8 id="Block8" />
          <div id="RightHunk">
            <div id="Block9"></div>
            <div id="Block13">
              <Block13 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

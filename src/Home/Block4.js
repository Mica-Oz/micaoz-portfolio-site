import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player/lazy";

import "./Block4.css";

function Block4() {
  return (
    <div id="block4">
      <ReactPlayer
        id="player"
        url="https://vimeo.com/196005286"
        // width="120%"
        // height="120%"
        // controls={false}
        muted={true}
        autoplay={true}
        playing={true}
        loop={true}
      />
    </div>
  );
}

export default Block4;

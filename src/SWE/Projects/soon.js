import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./rotoflo.css";

function Soon() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./ani.json"),
    });
  }, []);

  return (
    <div id="rotofloFlex">
      <div id="projHeader">
        <h4>PROJECT DETAILS COMING SOON</h4>
        <div className="soon" ref={container}></div>
      </div>
    </div>
  );
}
export default Soon;

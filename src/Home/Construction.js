/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./construction.css";

function Construction() {
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
    <div className="flex">
      <div className="constructionApp">
        <p className="text">THIS PAGE IS IN</p>
        <p className="text2">DEVELOPMENT</p>
        <div className="container" ref={container}></div>
      </div>
    </div>
  );
}

export default Construction;

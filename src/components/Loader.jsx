
"use client";

import { useEffect, useState } from "react";
import "./Loader.css";

import GreyLogo from "../assets/logos/Sindh Stationers Logo (Grey).svg";
import WhiteLogo from "../assets/logos/Sindh Stationers Logo (Light).svg";

function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="site-loader"
      onAnimationStart={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === "loader-exit"
        ) {
          window.setTimeout(() => {
            window.dispatchEvent(
              new Event("sindh-loader-complete")
            );
          }, 600);
        }
      }}
      onAnimationEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === "loader-exit"
        ) {
          setVisible(false);
        }
      }}
    >
      <div className="loader-logo">
        <img className="loader-logo-grey" src={GreyLogo.src} alt="" />

        <div className="loader-logo-reveal">
          <img src={WhiteLogo.src} alt="Sindh Stationers" />
        </div>
      </div>
    </div>
  );
}

export default Loader;

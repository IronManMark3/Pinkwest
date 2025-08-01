import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function InvestmentSection() {
  const leftSvgRef = useRef(null);
  const rightSvgRef = useRef(null);

  useEffect(() => {
    // Animate left SVG: move right and back
    gsap.to(leftSvgRef.current, {
      x: 40,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    // Animate right SVG: move left and back
    gsap.to(rightSvgRef.current, {
      x: -40,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="investment-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* New SVG Background on the left */}
      <div
        ref={leftSvgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 250"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <path
            className="cls-1"
            d="M153.71,166.65c-9.15,3.66-17.85,6.86-24.87,9.15,3.97,1.68,12.51,5.03,19.22,7.93l13.88,6.1,28.37,12.66v.92c-20.9,9.31-45.92,20.9-61.48,26.54,9.76,3.97,45.46,17.85,62.24,24.26v26.24l-111.51-49.27v-1.07l49.12-21.51c4.27-1.98,8.85-3.97,13.12-5.64-4.27-1.68-8.85-3.66-13.12-5.49l-49.12-21.66v-1.07l111.51-49.12v26.09l-37.38,14.95ZM132.03,71.74c-9.36-3.57-29.28-11.32-34.72-13.53,8.68-3.15,22.64-9.62,34.3-14.81v-.51l-15.83-7.06-7.74-3.4c-3.74-1.62-8.51-3.49-10.72-4.43,3.91-1.28,8.77-3.06,13.87-5.11l20.85-8.34V0l-62.21,27.4v.6l27.4,12.08c2.38,1.02,4.94,2.13,7.32,3.06-2.38.94-4.94,2.04-7.32,3.15l-27.4,12v.6l62.21,27.49v-14.64ZM0,109.37l14.2,6.26c1.23.53,2.56,1.1,3.79,1.59-1.23.48-2.56,1.06-3.79,1.63l-14.2,6.22v.31l32.23,14.24v-7.58c-4.85-1.85-15.17-5.86-17.99-7.01,4.5-1.63,11.73-4.98,17.77-7.67v-.26l-8.2-3.66-4.01-1.76c-1.94-.84-4.41-1.81-5.56-2.29,2.03-.66,4.54-1.59,7.19-2.65l10.8-4.32v-7.54L0,109.06v.31Z"
            fill="#fff"
          />
        </svg>
      </div>
      {/* New SVG Background on the right (not mirrored) */}
      <div
        ref={rightSvgRef}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 250"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <path
            className="cls-1"
            d="M153.71,166.65c-9.15,3.66-17.85,6.86-24.87,9.15,3.97,1.68,12.51,5.03,19.22,7.93l13.88,6.1,28.37,12.66v.92c-20.9,9.31-45.92,20.9-61.48,26.54,9.76,3.97,45.46,17.85,62.24,24.26v26.24l-111.51-49.27v-1.07l49.12-21.51c4.27-1.98,8.85-3.97,13.12-5.64-4.27-1.68-8.85-3.66-13.12-5.49l-49.12-21.66v-1.07l111.51-49.12v26.09l-37.38,14.95ZM132.03,71.74c-9.36-3.57-29.28-11.32-34.72-13.53,8.68-3.15,22.64-9.62,34.3-14.81v-.51l-15.83-7.06-7.74-3.4c-3.74-1.62-8.51-3.49-10.72-4.43,3.91-1.28,8.77-3.06,13.87-5.11l20.85-8.34V0l-62.21,27.4v.6l27.4,12.08c2.38,1.02,4.94,2.13,7.32,3.06-2.38.94-4.94,2.04-7.32,3.15l-27.4,12v.6l62.21,27.49v-14.64ZM0,109.37l14.2,6.26c1.23.53,2.56,1.1,3.79,1.59-1.23.48-2.56,1.06-3.79,1.63l-14.2,6.22v.31l32.23,14.24v-7.58c-4.85-1.85-15.17-5.86-17.99-7.01,4.5-1.63,11.73-4.98,17.77-7.67v-.26l-8.2-3.66-4.01-1.76c-1.94-.84-4.41-1.81-5.56-2.29,2.03-.66,4.54-1.59,7.19-2.65l10.8-4.32v-7.54L0,109.06v.31Z"
            fill="#fff"
          />
        </svg>
      </div>
      <h1
        className="inv-1"
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: "50px",
          color: "#EC2C5A",
          textShadow: "0 2px 16px rgba(0,0,0,0.12)",
        }}
      >
        6% ASSURED RETURNS
      </h1>
    </section>
  );
}

import React, { useEffect } from "react";
import { useRef } from "react";

const Home = () => {
  const backgroundRef = useRef(null);
  useEffect(() => {
    const Effect = window.VANTA.WAVES({
      el: backgroundRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x15073b,
      shininess: 40.0,
      waveHeight: 16.5,
      waveSpeed: 0.7,
      zoom: 1.23,
    });
    return () => {
      if (Effect) Effect.destroy();
    };
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "2px solid rgb(123 192 44 / 40%)",
            height: "80vh",
            width: "90vw",
            borderRadius: 15,
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-around",
          }}
          ref={backgroundRef}
        >
          <div
            style={{
              // border: "2px solid red",
              width: "60vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                //     background: "rgba( 255, 255, 255, 0.05 )",
                // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                // backdropFilter: "blur( 4px )",
                // webkitBackdropFilter: "blur( 4px )",
                // borderRadius: "10px",
                width: "80%",
                height: "55vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "rgb(255,255,255,0.5)",
              }}
            >
              <h1 className="home_h1">👋 Hey, I'm Vansh</h1>
              <h1 className="home_h1">Full-Stack Developer.</h1>
              <p style={{ textAlign: "left", width: "70%" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
                porro dignissimos ut tempora eum molestias dolor vel totam eos
                distinctio earum aliquam, accusamus quam dolorem, quaerat
                dolores ducimus numquam
              </p>
            </div>
          </div>
          <div style={{ width: "40vw" }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;

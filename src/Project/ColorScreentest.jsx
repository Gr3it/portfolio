import React, { useEffect, useRef } from "react";

import "../CSS/ProjectPages.css";
import "../CSS/Explore.css";

import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function ColorScreentest({ color }) {
  document.documentElement.style.setProperty("--Scrollbar-color", color);

  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <div className="flex-columns align-center">
      <ProjectMenu
        githubLink="https://github.com/Gr3it/Color-Screentest"
        github
        playStore
        playStoreLink="https://play.google.com/store/apps/details?id=com.colorscreentest"
      />
      <div className="project-home container-large">
        <h2 className="home-subtitle project-subtitle">Color Screentest</h2>
        <h1 className="project-title">
          The easiest app to test for display's defects and compare colors
          between devices
        </h1>
        <div
          onClick={() => {
            document.getElementById("anchor-image").scrollIntoView();
          }}
          className="explore-container"
        >
          <h2 className="explore-text">Explore more</h2>
          <svg
            className="explore-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="project-first-image flex-center"
        style={{ backgroundColor: color }}
      >
        <div className="container-large">
          <div
            id="anchor-image"
            style={{ position: "absolute", top: "-6.875rem", left: 0 }}
          ></div>
          <video autoPlay loop muted ref={videoRef}>
            <source
              src={
                process.env.PUBLIC_URL + "/Assets/ColorScreentest/Trailer.mp4"
              }
            />
            <source
              src={
                process.env.PUBLIC_URL + "/Assets/ColorScreentest/Trailer.webm"
              }
            />
          </video>
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The challenge</h1>
          <p className="width100 paragraph-justify">
            As I wanted to try to develop an app for mobile, I decided to test
            and develop my knowledge of React-Native. I conceived the project to
            be able to put in practice the diverse main features of this
            programming language, such as useState, StyleSheet, custom
            components, 3rd party modules, and some android custom code to
            manage the light and dark mode of the device. The project wants to
            be a simple application, that through different menus allows you to
            change the color of the app background.
          </p>
        </div>
      </div>
      <div
        className="project-presentation-images"
        style={{ backgroundColor: color }}
      >
        <img
          className="project-second-image"
          src={process.env.PUBLIC_URL + "/Assets/ColorScreentest/3Devices.jpg"}
          alt="3 Devices screen showcase"
        />
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The App</h1>
          <p className="width100 paragraph-justify">
            With a simple touch on the display, the menu appears. The first menu
            allows the creation of a customized background color by selecting
            the value of 3 RGB parameters (red, green, and blue). Sliding right
            on the menu, you arrive on the second menu in which you can choose
            between some given colors. While the overlay is open you can tap
            outside of the menu for hiding it and another tap for showing it.
          </p>
        </div>
        <div className="project-row">
          <img
            className="project-row-image"
            src={
              process.env.PUBLIC_URL + "/Assets/ColorScreentest/ScreenMenu1.jpg"
            }
            alt="First Menu screenshot"
            style={{ padding: 0 }}
          />

          <p className="width50 paragraph-justify">
            The first menu that we find in the modal is composed of three
            sliders related to the three parameters of RGB, Red, Green, and
            Blue. The sliders allow changing the individual values of the color
            of the background. At the right side of the sliders, we find a text
            label that shows the current value of the corresponding color.
          </p>
        </div>
        <div className="project-row">
          <img
            className="project-row-image"
            src={
              process.env.PUBLIC_URL + "/Assets/ColorScreentest/ScreenMenu2.jpg"
            }
            alt="Second Menu screenshot"
            style={{ padding: 0 }}
          />
          <p className="width50 paragraph-justify">
            The menu that we find to the right of the modal is composed of 24
            colors present that let you change rapidly and easily the background
            color. Selecting a preset color will also modify the values of the
            slider on the other menu, to which you can return to apply slight
            changes on the color selected.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ColorScreentest;

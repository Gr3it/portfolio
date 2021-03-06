import React from "react";

import "../CSS/ProjectPages.css";
import "../CSS/Explore.css";

import ProjectMenu from "../Components/ProjectMenu";
import Footer from "../Components/Footer";

function Flynet({ color }) {
  document.documentElement.style.setProperty("--Scrollbar-color", color);
  return (
    <div className="flex-columns align-center">
      <ProjectMenu
        githubLink="https://github.com/Gr3it/Servlet-Flynet"
        github
      />
      <div className="project-home container-large">
        <h2 className="home-subtitle project-subtitle">Flynet</h2>
        <h1 className="project-title">
          Cagliari airport website: flights' info and administration page
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
          <img
            className="width100"
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Home.jpg"}
            alt="Site Homepage"
          />
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The challenge</h1>
          <p className="width100 paragraph-justify">
            The site reads the flight's data from a MySQL database and displays
            the relevant information on different pages. Moreover, it has to
            provide an administrative page, accessible by the airport's staff
            via login, for them to manage the flight database. The homepage will
            display useful information for the customer, like maps and
            Cagliari's weather forecast.
          </p>
        </div>
      </div>
      <div
        className="project-presentation-images"
        style={{ backgroundColor: color }}
      >
        <div className="grid-image-container">
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Home.jpg"}
            alt="Home"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Arrivals.jpg"}
            alt="Arrivals"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Login.jpg"}
            alt="Login"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Maps.jpg"}
            alt="Maps"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Search.jpg"}
            alt="Search"
          />
          <img
            src={process.env.PUBLIC_URL + "/Assets/Flynet/Admin.jpg"}
            alt="Admin"
          />
        </div>
      </div>
      <div className="flex-columns container-large">
        <div className="project-description">
          <h1 className="width100 sub-section-title">The pages</h1>
          <p className="width100 paragraph-justify">
            The website is based on three main pages: the airport flight arrival
            and departures pages, the flight search page, and the administrative
            page for the airport's staff. The user can navigate through these
            pages with a practical menu positioned at the top.
          </p>
        </div>
        <div className="project-row">
          <div
            className="project-row-image-dual"
            style={{ backgroundColor: color }}
          >
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Arrivals.jpg"}
              alt="Arrivals Page"
            />
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Departures.jpg"}
              alt="Departures Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            The airport flight arrival and departures pages are very similar.
            They show the flights arriving and departing time by reading the
            relevant data from the database. The data are displayed in a
            user-friendly table that highlights the row where the cursor is.
          </p>
        </div>
        <div className="project-row">
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Search.jpg"}
              alt="Search Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            On the flight search page, the user can view all flights from and to
            a selected destination by clicking on the button at the top left of
            the screen. Meanwhile, the section on the top right of the page
            allows the user to search flights through a flight code or airport
            code.
          </p>
        </div>
        <div className="project-row">
          <div className="project-row-image" style={{ backgroundColor: color }}>
            <img
              src={process.env.PUBLIC_URL + "/Assets/Flynet/Admin.jpg"}
              alt="Admin Page"
            />
          </div>
          <p className="width50 paragraph-justify">
            The administrative page is reserved for the staff only. It requires
            logging in with a valid account to edit the data stored in the
            database. Through multiple forms, the airport's staff can add a new
            flight, add a new flight company, edit an existing flight, delete an
            existing flight.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Flynet;

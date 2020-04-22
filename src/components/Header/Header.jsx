import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./Header.css";

const scrollToPage = (pageSelector) => {
  const goToPage = document.querySelector(pageSelector);
  const toElement = (element) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  toElement(goToPage);
};

const Header = () => {
  const handleOnKeyDown = (e, goTo) => {
    if (e.key === "Enter") {
      scrollToPage(goTo);
    }
  };
  return (
    <Parallax
      className="parallax-container2"
      offsetYMax={20}
      offsetYMin={-20}
      slowerScrollRate
      tag="figure"
    >
      <header className="header__container">
        <h1 className="header__title">Kevin &nbsp;Boyle</h1>
        <h2 className="header__subtitle">Web Developer</h2>
        <nav className="header__link-container">
          <div
            tabIndex={0}
            className="header__nav-link flex-container--centered"
            title="go to about section"
            role="button"
            onKeyDown={(e) => handleOnKeyDown(e, ".about-container")}
            onClick={() => scrollToPage(".about-container")}
          >
            About
          </div>
          <div
            tabIndex={0}
            className="header__nav-link flex-container--centered"
            title="go to gallery section"
            role="button"
            onKeyDown={(e) => handleOnKeyDown(e, ".gallery-container")}
            onClick={() => scrollToPage(".gallery-container")}
          >
            Projects
          </div>
          <div
            tabIndex={0}
            className="header__nav-link flex-container--centered"
            title="go to contact section"
            role="button"
            onKeyDown={(e) => handleOnKeyDown(e, ".contact-container")}
            onClick={() => scrollToPage(".contact-container")}
          >
            Contact
          </div>
        </nav>
      </header>
    </Parallax>
  );
};

export default Header;

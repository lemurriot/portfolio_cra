import React, { useRef, useEffect, useContext } from "react";
import AppContext from "../../AppContext";
import "./AboutPage.css";

const skillsList = [
  "Javascript",
  "HTML5/CSS3",
  "React",
  "CSS Preprocessors",
  "Node",
  "Mobile Responsive Design",
  "Express",
  "SVG Illustration (Adobe CC)",
  "jQuery",
  "MVC Design",
  "PostgreSQL",
  "API Integration",
  "Jest/Mocha",
  "Team-Oriented Git Flow",
  "ES6/ES7/ES8",
  "Atlassian Suite",
];

const AboutPage = () => {
  const { setOffsetTop } = useContext(AppContext);
  const ref = useRef();

  useEffect(() => {
    const getElementOffsetTop = () => {
      if (ref.current) {
        setOffsetTop("about", ref.current.offsetTop);
      }
    };
    getElementOffsetTop();
    window.addEventListener("resize", getElementOffsetTop);
    return () => {
      window.removeEventListener("resize", getElementOffsetTop);
    };
  }, [setOffsetTop]);

  return (
    <section className="about-container flex-container--centered" ref={ref}>
      <article style={{ width: "100vw" }}>
        <div className="about-upper">
          <div className="about-upper-half about-upper-left flex-container--centered">
            <span className="hi">Hi</span>
          </div>
          <div className="about-upper-half about-upper-right flex-container--centered">
            <p>
              Thank you for visiting. I&apos;m Kevin from Portland, OR. I design
              &amp; develop web apps, websites, and user interfaces.
            </p>
          </div>
        </div>
        <div className="about-lower">
          <p>
            <span className="leader-text2">
              Coding is my trade and vehicle for life-long learning.
            </span>
            &nbsp;As a programmer, I aim for clean, efficient, maintainable
            code. As a web developer, I aim to deliver inviting and intuitive
            virtual spaces with user-friendly applications.
          </p>
          <p>
            My background is in cultural anthropology. I am an artist,
            innovator, creative thinker, and problem solver. Much of my passion
            for programming comes from my interest in the intersection of art
            and technology.
          </p>
          <p className="leader-text2">My toolkit includes:</p>
          <ul className="skills-list ul-reset">
            {skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;

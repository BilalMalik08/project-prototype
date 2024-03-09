import "./about.css";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import AboutBottom from "./AboutBottom";

function About() {
  return (
    <>
      <div className="container-fluid about-row1-container">
        <div className="about-heading">
          <h1>About Us</h1>
        </div>
        <div className="row about-row1">
          <div className="col col-md-6">
            <AboutLeft />
          </div>

          <div className="col col-md-6">
            <AboutRight />
          </div>
        </div>
      </div>

      <div className="container about-row2-container">
        <div className="row about-row2">
          <AboutBottom />
        </div>
      </div>
    </>
  );
}

export default About;

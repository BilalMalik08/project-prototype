import "./aboutLeft.css";
import aboutLeftImg from "../../Img/aboutLeftImg.jpg";

function AboutLeft() {
  return (
    <>
      <div className="container-fluid about-left-container">
        <div className="card about-left-card">
          <div className="card-body about-left-card-body">
            <h1 className="card-title about-left-card-title mb-4">
              Who we are?
            </h1>
            <p className="card-text about-left-card-text">
              Equality Immigration and Visa Services Ireland.
            </p>
          </div>
          <img
            src={aboutLeftImg}
            className="card-img-top about-left-card-img-top"
            alt="Equality Immigration and Visa Services Ireland."
          />
        </div>
      </div>
    </>
  );
}

export default AboutLeft;

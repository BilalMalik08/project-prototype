import "./aboutBottom.css";
import aboutBottomImg from "../../Img/aboutBottomImg.jpg";

function AboutBottom() {
  return (
    <>
      <div className="container-fluid about-bottom-container">
        <div className="card about-bottom-card">
          <div className="card-body about-bottom-card-body">
            <h1 className="card-title about-bottom-card-title mb-4">
              Why we are different?
            </h1>
            <p className="card-text about-bottom-card-text">
              We provide professional services with support, advice, and further
              information and the necessary representation required and will
              assist you in submitting your applications to the various
              governmental department.
            </p>
          </div>
          <img
            src={aboutBottomImg}
            className="card-img-top about-bottom-card-img-top"
            alt="Equality Immigration and Visa Services Ireland."
          />
        </div>
      </div>
    </>
  );
}

export default AboutBottom;

import "./aboutRight.css";
import aboutRightImg from "../../Img/aboutRightImg.jpg";

function AboutRight() {
  return (
    <>
      <div className="container-fluid about-right-container">
        <div className="card about-right-card">
          <img
            src={aboutRightImg}
            className="card-img-top about-right-card-img-top"
            about-right-card-img-top
            alt="Equality Immigration and Visa Services Ireland."
          />
          <div className="card-body about-right-card-body">
            <h1 className="card-title about-right-card-title mb-4">
              What do we do?
            </h1>
            <p className="card-text about-right-card-text">
              Consultancy advice on Immigration, Employment (Critical Skills,
              General Employment and etc) and Visas in Ireland.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutRight;

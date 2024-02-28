import "./carousel.css";
import travel3 from "../Img/travel3.jpg";
import travel5 from "../Img/travel5.jpg";
import travel6 from "../Img/travel6.jpg";
import travel7 from "../Img/travel7.jpg";
import { useState, useEffect } from "react";

function Carousel() {
  const [showCaption, setShowCaption] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCaption(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="row carousel-row1">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={travel3} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={travel5} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={travel6} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={travel7} className="d-block carouselImg" alt="bg-img" />
            </div>
          </div>
          <div
            className={`carousel-caption ${showCaption ? "show animated" : ""}`}
          >
            <h1 className="carousel-heading">
              <span>Welcome</span> <span>To</span> <span>The</span>
            </h1>
            <p className="carousel-para">
              <span>Equality</span> <span>Immigration</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;

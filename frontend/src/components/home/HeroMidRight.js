import "./heroMidRight.css";
import ireland from "../../Img/5ireland.jpg";

function HeroMidRight() {
  return (
    <div className="container hero-mid--right-container">
      <div className="card hero-mid--right-card">
        <div className="card-body hero-mid--right-card-body">
          <img
            src={ireland}
            className="card-img-top hero-mid--right-img"
            alt="..."
          />
          <div className="image-overlay">
            <h2 className="overlay-text">
              <span>5</span> <span>common</span> <span>visit</span>{" "}
              <span>types</span> <span>in</span> <span>Ireland</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMidRight;

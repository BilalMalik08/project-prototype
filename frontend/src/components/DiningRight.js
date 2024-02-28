import "./diningRight.css";
import ireland from "../Img/5ireland.jpg";

function DiningRight() {
  return (
    <div className="container dining-right-container">
      <div className="card dining-right-card">
        <div className="card-body dining-right-card-body">
          <img
            src={ireland}
            className="card-img-top dining-right-img"
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

export default DiningRight;

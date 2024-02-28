import "./heroTopLeft.css";
import whyChooseUs from "../../Img/whyChooseUs.png";

function HeroTopLeft() {
  return (
    <>
      <div className="container hero-top-left-container">
        <div class="card hero-top-left-card">
          <div class="card-body hero-top-left-card-body">
            <img
              src={whyChooseUs}
              class="card-img-top hero-top-left-img"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroTopLeft;

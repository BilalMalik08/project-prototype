import "./heroMidLeft.css";
import phone from "../../Img/phone.png";
import phoneVideo from "../../video/phonevideo.mp4";

function HeroMidLeft() {
  return (
    <>
      <div className="container hero-mid-left-container">
        <div className="phone">
          <img src={phone} alt="" />
          <div className="phone-screen">
            <video className="phone-app-vid" autoPlay controls muted loop>
              <source src={phoneVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroMidLeft;

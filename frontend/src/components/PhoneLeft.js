import "./phoneLeft.css";
import phone from "../Img/phone.png";
import phoneVideo from "../video/phonevideo.mp4";

function PhoneLeft() {
  return (
    <>
      <div className="container phoneLeft-container">
        <div className="phone">
          <img src={phone} alt="" />
          <div className="phone-screen">
            <video
              className="phone-app-vid"
              src={phoneVideo}
              autoPlay
              loop
              controls
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneLeft;

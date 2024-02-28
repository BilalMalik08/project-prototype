import "./home.css";
import Carousel from "./Carousel";
import MissionLeft from "./MissionLeft";
import MissionRight from "./MissionRight";
// import FoodVideo from "./FoodVideo";
import PhoneLeft from "./PhoneLeft";
import DiningRight from "./DiningRight";
// import SpCarousel from "./SpCarousel";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Carousel />

      <div className="row home-row2">
        <div className="col col-md-6 mission-left-img-col">
          <MissionLeft />
        </div>
        <div className="col col-md-6 mission-right-text-col">
          <MissionRight />
        </div>
      </div>

      <div className="row home-row4">
        <div className="col col-md-6">
          <PhoneLeft />
        </div>
        <div className="col col-md-6">
          <DiningRight />
        </div>
      </div>
    </>
  );
}

export default Home;

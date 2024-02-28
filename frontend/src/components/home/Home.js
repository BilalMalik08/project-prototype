import "./home.css";
import HeroCarousel from "./HeroCarousel";
import HeroTopLeft from "./HeroTopLeft";
import HeroTopRight from "./HeroTopRight";
import HeroMidLeft from "./HeroMidLeft";
import HeroMidRight from "./HeroMidRight";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <HeroCarousel />

      <div className="row home-row1">
        <div className="col col-md-6 hero-top-left-img-col">
          <HeroTopLeft />
        </div>
        <div className="col col-md-6 hero-top-right-text-col">
          <HeroTopRight />
        </div>
      </div>

      <div className="row home-row2">
        <div className="col col-md-6">
          <HeroMidLeft />
        </div>
        <div className="col col-md-6">
          <HeroMidRight />
        </div>
      </div>

      <div className="row home-row3">
        <Menu />
      </div>
    </>
  );
}

export default Home;

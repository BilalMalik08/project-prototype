import "./menuCard.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import advicePackage from "../Img/advicePackage.png";
import applicationPackage from "../Img/applicationPackage.png";
import premiumPackage from "../Img/premiumPackage.png";
import documentCheckPackage from "../Img/documentCheckPackage.png";

function MenuCard() {
  const [ourPackage, setOurPackage] = useState([
    {
      _id: 1,
      image: advicePackage,
      packageCategory: "Advice Packages",
      description: "Consultation.",
      price: "€100",
    },
    {
      _id: 2,
      image: applicationPackage,
      packageCategory: "Application Packages",
      description: "2 Consultations.",
      price: "€150",
    },
    {
      _id: 3,
      image: premiumPackage,
      packageCategory: "Premium Packages",
      description: "One consultation faster following your deadline.",
      price: "€150",
    },
    {
      _id: 4,
      image: documentCheckPackage,
      packageCategory: "The Document Check Package",
      description: "",
      price: "€70",
    },
  ]);

  return (
    <>
      <div className="row menu-card-row1">
        <div className="container menu-card-container">
          <div className="row row-cols-1 row-cols-md-3 menu-card-row-cols g-4">
            {ourPackage.map((packageItem) => (
              <div className="col menu-card-col" key={packageItem._id}>
                <div className="card menu-card">
                  <img
                    className="menu-card-img"
                    src={packageItem.image}
                    alt={packageItem.packageCategory}
                  />
                  <div className="card-body menu-card-body">
                    <div className="menu-card-title-container">
                      <h5 className="card-title menu-card-title">
                        {packageItem.packageCategory}
                      </h5>
                    </div>
                    <div className="menu-card-text-container">
                      <p className="card-text menu-card-text">
                        {packageItem.description}
                      </p>
                      <p className="card-text menu-card-text">
                        Price: {packageItem.price}
                      </p>
                    </div>
                    <div className="menu-card-btn-container">
                      <Link
                        to={``}
                        className="btn btn-outline-light menu-card-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCard;

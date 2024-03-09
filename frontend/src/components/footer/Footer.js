import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Custom component to open links in new tab
const ExternalLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(to, "_blank");
  };

  return <span onClick={handleClick}>{children}</span>;
};

function Footer() {
  return (
    <div className="footer-row">
      <h6 className="footer-h6">
        Copyright © www.equalityimmigration.com | All rights reserved!
      </h6>
      <div className="social-links">
        <ExternalLink to="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </ExternalLink>
        <ExternalLink to="https://www.instagram.com/equalityimmigration.ie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <FontAwesomeIcon icon={faInstagram} />
        </ExternalLink>
      </div>
    </div>
  );
}

export default Footer;

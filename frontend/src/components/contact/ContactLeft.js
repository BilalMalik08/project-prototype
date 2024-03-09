import "./contactLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBuilding,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ContactLeft() {
  return (
    <>
      <div className="container contact-left-list-container">
        <ul className="list-group contact-left-list-group">
          <li className="list-group-item contact-left-list-group-item">
            <FontAwesomeIcon icon={faPhone} className="contact-left-icon" />
            {"Call Us: (+353) 874797439"}
          </li>
          <li className="list-group-item contact-left-list-group-item">
            <FontAwesomeIcon icon={faWhatsapp} className="contact-left-icon" />
            {"Whatsapp: +353874797439"}
          </li>
          <li className="list-group-item contact-left-list-group-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-left-icon" />
            {"Email: equalityimmigration@gmail.com"}
          </li>
          <li className="list-group-item contact-left-list-group-item">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="contact-left-icon"
            />
            {"Location: Ireland"}
          </li>
          <li className="list-group-item contact-left-list-group-item">
            <FontAwesomeIcon icon={faBuilding} className="contact-left-icon" />
            {"Address: XYZ"}
          </li>
          <li className="list-group-item contact-left-list-group-item">
            <FontAwesomeIcon icon={faClock} className="contact-left-icon" />
            {"Timings: XYZ"}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactLeft;

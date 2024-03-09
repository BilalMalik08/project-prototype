import "./contact.css";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

function Contact() {
  return (
    <>
      <div className="container-fluid contact-row1-container">
        <div className="contact-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="row contact-row1">
          <div className="col col-md-6">
            <ContactLeft />
          </div>
          <div className="col col-md-6">
            <ContactRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

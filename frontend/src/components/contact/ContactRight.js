import "./contactRight.css";

function ContactRight() {
  return (
    <>
      <div className="container map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88527.82418490424!2d-6.260308239833766!3d53.349805293038155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9c47d06213%3A0x20a5bb501067001!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1672129293643!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactRight;

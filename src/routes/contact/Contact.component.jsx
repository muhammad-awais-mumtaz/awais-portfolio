import "./Contact.style.css";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-items">
        <p>
          If you wanted to contact me more easily then click on one of the
          following buttons. My email is{" "}
          <b>muhammadawaismumtaz2786@gmail.com</b> and my Whatsapp number is{" "}
          <b>+923222636688</b>
        </p>
        <div className="buttons">
          <div className="btn whatsapp">
            <div className="gradient-color-btn">
              <a
                href="https://api.whatsapp.com/send?phone=923222636688"
                target="__blank"
              >
                Whatsapp me <BsWhatsapp />
              </a>
            </div>
          </div>
          <div className="btn email">
            <div className="gradient-color-btn">
              <a
                href="mailto: muhammadawaismumtaz2786@gmail.com"
                target="__blank"
              >
                Email me <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

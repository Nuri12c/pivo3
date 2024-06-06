import "./style.scss";
import instagram from "../../assets/img/icons8-instagram.svg";
import telegram from "../../assets/img/icons8-telegram.svg";
import share from "../../assets/img/icons8-share.svg";
import whatsapp from "../../assets/img/icons8-whatsapp.svg";
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <h2 className="footer__item-heading">OUR LOCATION</h2>
            <div className="footer__item-container">
              <span className="footer__item-text">Russian Federation</span>
              <br />
              <span className="footer__item-text">
                1422 1st St. Santa Rosa, CA 94559
              </span>
            </div>
            <div className="footer__item-container">
              <span className="footer__item-text">
                Call for Reservations:{" "}
                <a href="tel:+ 1(800) 123-4567">+ 1(800) 123-4567</a>
              </span>
              <br />
              <span className="footer__item-text">
                E-mail: <a href="mailto:admin@e-mail.com">admin@e-mail.com</a>
              </span>
            </div>
            <div className="icons">
              <a href="">
                <img className="icons__img" src={instagram} alt="instagram" />
              </a>
              <a href="">
                <img className="icons__img" src={telegram} alt="telegram" />
              </a>
              <a href="">
                <img className="icons__img" src={share} alt="share" />
              </a>
              <a href="">
                <img className="icons__img" src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </li>
          <li className="footer__item2">
            <h2 className="footer__item-heading">TAPROOM HOURS</h2>
            <div className="footer__item-container">
              <span>Monday</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Tuesday</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Wednesday</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Thursday</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Friday</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Saturday</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </li>
          <li className="footer__item3">
            <img className="footer__img" src={logo} alt="logo" />
          </li>
        </ul>

        <div className="footer__bottom-text">
          <p>Craft Beer & Brewery Template Kit by Jegtheme </p>
          <p>Copyright © 2021. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

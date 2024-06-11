import "./style.scss";
import instagram from "../../assets/img/icons8-instagram.svg";
import telegram from "../../assets/img/icons8-telegram.svg";
import share from "../../assets/img/icons8-share.svg";
import whatsapp from "../../assets/img/icons8-whatsapp.svg";
import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/arrow.svg";


export const Footer = () => {
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
   
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul id="links" className="footer__list">
          <li className="footer__item">
            <h2 className="footer__item-heading">НАША ЛОКАЦИЯ</h2>
            <div className="footer__item-container">
              <span className="footer__item-text">Россия</span>
              <br />
              <span className="footer__item-text">
                ул. Профсоюзная д. 11 подъезд 12 кв. 3
              </span>
            </div>
            <div className="footer__item-container">
              <span className="footer__item-text">
                Наш номер телефона{" "}
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
            <h2 className="footer__item-heading">РАБОЧИЕ ЧАСЫ</h2>
            <div className="footer__item-container">
              <span>Понедельник</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Вторник</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Среда</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Четверг</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Пятница</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Суббота</span>
              <span>1:00pm - 8:00pm</span>
            </div>
            <div className="footer__item-container">
              <span>Воскресенье</span>
              <span>ЗАКРЫТО</span>
            </div>
          </li>
          <li className="footer__item3">
            <img className="footer__img" src={logo} alt="logo" />
          </li>
        </ul>
        <button onClick={scrollToTop} className="scrollToTopButton">
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </div>
    </footer>
  );
};

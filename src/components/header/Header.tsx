import { useEffect, useState } from "react";
import "./style.scss";
import logo from "../../assets/img/logo.png";
import instagram from "../../assets/img/icons8-instagram.svg";
import telegram from "../../assets/img/icons8-telegram.svg";
import share from "../../assets/img/icons8-share.svg";
import whatsapp from "../../assets/img/icons8-whatsapp.svg";
export const Header = () => {
  const [activeTab, setActiveTab] = useState("first");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabs = ["first", "second", "third"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (newActiveTab: string) => {
    setActiveTab(newActiveTab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  
  return (
    <header className="header header__bg-1">
      <div className="container header__container">
        <div className="header__navbar">
          <div className="logo">
            <img src={logo} alt="" width="70" height="75" />
          </div>
          <ul className={`nav__list ${isMenuOpen ? "nav__list_active" : ""}`}>
            <li className="nav__item">
              <a
                href="#forus"
                className={`link ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                О нас
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#uslugi"
                className={`link ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Услуги
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#proizvodstvo"
                className={`link ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Производство
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#links"
                className={`link ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Контакты
              </a>
            </li>
            <li className="nav__item ">
              <div className="icons icons-header">
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
            <li className="nav__item lincs-item">
              <img className="footer__img" src={logo} alt="logo" />
            </li>
            {/* Добавляйте дополнительные пункты меню здесь... */}
          </ul>
          <button
            className={`burger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span
              className={
                isMenuOpen ? "burger__line burger__line_active" : "burger__line"
              }
            ></span>
            <span
              className={
                isMenuOpen ? "burger__line burger__line_active" : "burger__line"
              }
            ></span>
            <span
              className={
                isMenuOpen ? "burger__line burger__line_active" : "burger__line"
              }
            ></span>
          </button>
          {/* Остальная часть вашего кода... */}
        </div>
        <div className="header__content">
          <div className={`slider ${activeTab === "first" ? "" : "none"}`}>
            <h1 className="slider-h1">
              Первый магазин пивного <br />
              производства в России
            </h1>
            <p className="slider-p">
              "Пиво пьем пьем пьем, все для пива продаем <br></br>
              Кто продает ? мы продаем!"
            </p>
            <button className="global__btn btn1">Заказать</button>
          </div>

          <div className={`slider2 ${activeTab === "second" ? "" : "none"}`}>
            <h1 className="slider-h1">
              Первый магазин пивного <br />
              производства в России
            </h1>
            <p className="slider-p">
              "Пиво пьем пьем пьем, все для пива продаем <br></br>
              Кто продает ? мы продаем!"
            </p>
            <button className="global__btn btn1">Свяжитесь с нами</button>
          </div>

          <div className={`slider3 ${activeTab === "third" ? "" : "none"}`}>
            <h1 className="slider-h1">
              Первый магазин <br />
              пивного производства в России
            </h1>
            <p className="slider-p">
              "Пиво пьем пьем пьем, все для пива продаем <br></br>
              Кто продает ? мы продаем!"
            </p>
            <button className="global__btn btn1">Сделать заказ</button>
          </div>

          <div className="circles">
            <div
              id="ww"
              className={`circle__item circle__item1 ${
                activeTab === "first" ? "circle__item-active" : ""
              }`}
              onClick={() => handleTabClick("first")}
            ></div>
            <div
              id="ee"
              className={`circle__item circle__item2 ${
                activeTab === "second" ? "circle__item-active" : ""
              }`}
              onClick={() => handleTabClick("second")}
            ></div>
            <div
              id="qq"
              className={`circle__item circle__item3 ${
                activeTab === "third" ? "circle__item-active" : ""
              }`}
              onClick={() => handleTabClick("third")}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

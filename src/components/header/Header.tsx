import "./style.scss";
import logo from "../../assets/img/logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("first");
  const tabs = ["first", "second", "third"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId); // Очищаем интервал, когда компонент будет размонтирован
  }, []);

  const handleTabClick = (newActiveTab: string) => {
    setActiveTab(newActiveTab);
  };
  
  return (
    <header className="header header__bg-1">
      <div className="container header__container">
        <div className="header__navbar">
          <div className="logo">
            <img src={logo} alt="" width="70" height="75" />
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="">Tutututut</a>
            </li>
            <li className="nav__item">
              <a href="">Clonmbia</a>
            </li>
            <li className="nav__item">
              <a href="">Tortoise</a>
            </li>
            <li className="nav__item">
              <a href="">Liberobeer</a>
            </li>
          </ul>
        </div>
        <div className="header__content">
          <div className={`slider ${activeTab === "first" ? "" : "none"}`}>
            <h1 className="slider-h1">Afathem yopby Ultt</h1>
            <p className="slider-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              provident.
            </p>
            <p className="slider-p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              quaerat. <br />
              Lorem ipsum dolor sit amet.
            </p>
            <button className="header__btn btn1">Lorem ipsum</button>
          </div>

          <div className={`slider2 ${activeTab === "second" ? "" : "none"}`}>
            <button className="header__btn btn2">Lorem ipsum</button>
          </div>

          <div className={`slider3 ${activeTab === "third" ? "" : "none"}`}>
            <h1 className="slider-h1">
              Afathem yopby Ultt <br /> Lorem ipsum dolor
            </h1>
            <p className="slider-p"></p>
            <button className="header__btn btn3">Lorem ipsum 333</button>
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

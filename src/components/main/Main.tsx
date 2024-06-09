import "./style.scss";
import barrel from "../../assets/img/barrel.svg";
import barrel2 from "../../assets/img/barrel2.svg";
import barrel3 from "../../assets/img/barrel3.svg";
import barrel4 from "../../assets/img/barrel4.svg";

export const Main = () => {
  return (
    <main className="main">
      <div className="container main__container">
        <section id="proizvodstvo" className="hero">
          <ul className="hero__list">
            <li className="hero__item">
              <figure>
                <img
                  className="hero__img"
                  src={barrel}
                  alt="barrel"
                  width="130"
                />
                <figcaption>
                  Собственное производство: Работа напрямую с производителем,
                  без наценок магазинов.
                </figcaption>
              </figure>
            </li>

            <li className="hero__item">
              <figure>
                <img
                  className="hero__img"
                  src={barrel2}
                  alt="barrel2"
                  width="150"
                />
                <figcaption>
                  Индивидуальный подход: Проконсультируем и соберём заказ под
                  ваши нужды
                </figcaption>
              </figure>
            </li>

            <li className="hero__item">
              <figure>
                <img
                  className="hero__img"
                  src={barrel3}
                  alt="barrel3"
                  width="150"
                />
                <figcaption>
                  Удобные отгрузки: Доставляем от 1 мешка до контейнеров ж/д
                </figcaption>
              </figure>
            </li>
            <li className="hero__item">
              <figure>
                <img
                  className="hero__img"
                  src={barrel4}
                  alt="barrel4"
                  width="150"
                />
                <figcaption>
                  Вы можете самостоятельно забрать заказ из точки самовывоза или
                  заказать доставку транспортной компанией по всей России.
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section id="forus" className="forus">
          <ul className="forus__container">
            <li className="forus__left-container">
              <div className="forus__left-item">
                <h1>Мы используем натуральные ингридиенты</h1>
              </div>

              <div className="forus__right-item first"></div>

              <div className="forus__left-item">
                Ячменный солод – основа приготовления большинства сортов пива и
                сырья для дистиляции.
              </div>

              <div className="forus__right-item second"></div>

              <div className="forus__left-item">
                Пшеничный солод -используется для приготовления пшеничного пива,
                а также в качестве добавки ко многим лёгким сортам пива и
                дистиляционным заторам.
              </div>

              <div className="forus__right-item third"></div>

              <div className="forus__left-item">
                Ржаной солод - применяют для приготовления хлебного вина,
                полугара и ржаного виски. Так же используется в для выпечки
                хлеба и других мучных изделий.
              </div>

              <div className="forus__right-item four"></div>

              <button className="global__btn">Сделать заказ</button>
            </li>
            <li className="forus__right-container">
              <div className="forus__right-item first"></div>
              <div className="forus__right-item second"></div>
              <div className="forus__right-item third"></div>
              <div className="forus__right-item four"></div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};


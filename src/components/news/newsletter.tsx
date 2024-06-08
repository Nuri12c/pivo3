import "./style.scss";

export const Newsletter = () => {
    return (
      <div className="form__line">
        <div className="container line__container">
          <div className="form">
            <div className="form__text">
              <h1 className="form__heading">НАШИ НОВОСТИ</h1>
              <p className="form__p">
               Подпишитесь на новостную ленту, получайте уведомления об акциях и выгодных предложениях
              </p>
            </div>
            <div className="form__actions">
              <form action="">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  id="email"
                  placeholder="Ваша почта"
                  required
                ></input>
                <button className="form__submit-button">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

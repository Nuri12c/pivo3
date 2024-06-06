import "./style.scss";

export const Newsletter = () => {
    return (
      <div className="form__line">
        <div className="container line__container">
          <div className="form">
            <div className="form__text">
              <h1 className="form__heading">NEWSLETTER</h1>
              <p className="form__p">
                Subscribe to our newsletter and receive special offers and
                discounts
              </p>
            </div>
            <div className="form__actions">
              <form action="">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  id="email"
                  placeholder="Your email address"
                  required
                ></input>
                <button className="form__submit-button">sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

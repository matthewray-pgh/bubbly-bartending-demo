import React from "react";

import "../styles/Quote.css";

const Quote = () => {
  return (
    <article className="quote">
      <section className="quote__block">
        <h2 className="quote__header">Get a quote</h2>
        <form>
          <div className="form__container">
            <label className="form__label">Name</label>
            <input className="form__input" type="text" />
          </div>

          <div className="form__container">
            <label className="form__label">Email</label>
            <input className="form__input" type="email" />
          </div>

          <div className="form__container">
            <label className="form__label">Phone</label>
            <input className="form__input" type="phone" />
          </div>

          <div className="form__container">
            <label className="form__label">Date of event</label>
            <input className="form__input" type="date" />
          </div>

          <div className="form__container">
            <label className="form__label">Type of event</label>
            <input className="form__input" type="text" />
          </div>

          <div className="form__container">
            <label className="form__label">
              Number of hours our exceptinal services are needed
            </label>
            <input className="form__input" type="text" />
          </div>

          <div className="form__container">
            <label className="form__label">Location or venue address</label>
            <input className="form__input" type="text" />
          </div>

          <button type="button" className="form__button">
            submit
          </button>
        </form>
      </section>
    </article>
  );
};

export default Quote;

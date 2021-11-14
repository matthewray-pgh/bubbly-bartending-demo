import React from "react";

import Quote from "../components/Quote";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faGifts,
  faBeer,
  faCocktail,
  faGlassCheers,
  faBuilding,
  faWineBottle,
  faWineGlassAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Home.css";
import "../styles/Form.css";

const Home = () => {
  return (
    <main className="home-page">
      <article className="welcome">
        <section className="welcome__block">
          <h2 className="welcome__header">Welcome to Bubbly Bartending</h2>
          <p className="welcome__text">Bartenders as bubbly as your drink!</p>
        </section>
      </article>

      <article className="events">
        <section className="events__block">
          <h2 className="events__header">Specilaized Events</h2>
          <section className="events__content">
            <div className="event__token">
              <FontAwesomeIcon icon={faGlassCheers} />
              <p className="events__text">Weddings</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faGifts} />
              <p className="events__text">Showers</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faBuilding} />
              <p className="events__text">Corporate</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faBirthdayCake} />
              <p className="events__text">Birthdays</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faCocktail} />
              <p className="events__text">Holidays</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faBeer} />
              <p className="events__text">Bachelor & Bachelorette</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faWineGlassAlt} />
              <p className="events__text">Private Parties</p>
            </div>
            <div className="event__token">
              <FontAwesomeIcon icon={faWineBottle} />
              <p className="events__text">Brunch Setups</p>
            </div>
          </section>
          <p className="events__text">
            We would love to be at your next event!
          </p>
        </section>
      </article>

      <article className="about">
        <h2 className="about__header">Meet Nikki, Owner</h2>
        <section className="about__block">
          <div>
            <p className="about__text">
              Hi, I’m Nikki! I’m a mom, wife and owner of Bubbly Bartending LLC.
              I was raised in the Pittsburgh area youngest of three living with
              my parents who both worked in the event and service industry. My
              mother was always a phenomenal bartender and my father worked as a
              local union stagehand setting up for the city’s most elaborate
              events.
            </p>
            <p className="about__text--highlight">
              You can say I was almost born into this business!
            </p>
            <p className="about__text">
              I married my high school sweetheart Jason in 2007 and quickly
              started a family with two beautiful babies to care for. I attended
              college online to get my Associates Degree in Business while
              working nights and weekends as a server or bartender while Jason
              was able to be home with the kids. I thrived in this role being so
              comfortable with all of my guests and built up a clientele who to
              this day I know what their drink order will be as they sit down. I
              soon got an opportunity to work small personal events and even
              helped out with a local caterer to understand all ins and outs of
              event operations. I have had amazing opportunities to learn from
              the best and be supported along my journey. Quickly after working
              events I knew this was my niche. Being apart of these events meant
              I get to have a role in these memorable and special moments. I was
              hooked. I am able to add something to all of my events to make
              them that much more satisfied with service. Bubbly Bartending LLC
              is now a reality and
            </p>
            <p className="about__text--highlight">I am living my dream!</p>
            <p className="about__text">
              Thank you for this opportunity to introduce myself and team to
              you.
            </p>
          </div>

          <div className="about__image"></div>
        </section>
      </article>

      <Quote />
    </main>
  );
};
export default Home;

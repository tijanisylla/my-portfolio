import React, { useState, FC } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDowm from "./ScrollDowm";
const Home: FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDowm />
      </div>
    </section>
  );
};

export default Home;

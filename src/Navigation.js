import React from "react";
import MX from "./img/MX.png";
import US from "./img/US.png";
import today from "./img/today-news.png";
import Date from "./Date";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation">
      <section className="menu-navbar">
        <div>
          <Date />
        </div>
        <div>
          <img src={today} alt="Today News" id="today" />
        </div>
        <div className="countries">
          <a className="country">
            <img src={MX} alt="MX" id="icon-flag" />
            MX
          </a>
          <a className="country">
            <img src={US} alt="US" id="icon-flag" />
            US
          </a>
        </div>
      </section>
      <hr />
      <section>
        <nav>
          <button href="#">Home</button>
          <button href="#">Business</button>
          <button href="#">Entertainment</button>
          <button href="#">Health</button>
          <button href="#">Science</button>
          <button href="#">Sports</button>
          <button href="#">Technology</button>
        </nav>
      </section>
    </div>
  );
}

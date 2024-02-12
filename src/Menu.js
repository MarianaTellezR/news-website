import React from "react";
import "./Menu.css";
import MX from "./img/MX.png";
import US from "./img/US.png";
import today from "./img/today-news.png";
import Date from "./Date";

export default function Menu() {
  return (
    <div className="Menu">
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
          <a href="#">Home</a>
          <a href="#">Business</a>
          <a href="#">Entertainment</a>
          <a href="#">Health</a>
          <a href="#">Science</a>
          <a href="#">Sports</a>
          <a href="#">Technology</a>
        </nav>
      </section>
      <footer>Created by Mariana Tellez Resendiz</footer>
    </div>
  );
}

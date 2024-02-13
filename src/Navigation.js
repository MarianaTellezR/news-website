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
          <button className="country">
            <img src={MX} alt="MX" id="icon-flag" /> MX
          </button>
          <button className="country">
            <img src={US} alt="US" id="icon-flag" /> US
          </button>
        </div>
      </section>
      <hr />
      <section>
        <nav>
          <button>Home</button>
          <button>Business</button>
          <button>Entertainment</button>
          <button>Health</button>
          <button>Science</button>
          <button>Sports</button>
          <button>Technology</button>
        </nav>
      </section>
    </div>
  );
}

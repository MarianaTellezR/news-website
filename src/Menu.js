import React from "react";
import "./Menu.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";

export default function Menu() {
  return (
    <div className="Menu">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

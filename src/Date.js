import React from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[month]} ${date}, ${year}`;
}

function App() {
  const currentDate = getDate();

  return <p>{currentDate}</p>;
}

export default App;

import React from "react";
import "./welcomeScreen.scss";
const WelcomeScreen = () => {
  return (
    <div className="welcomeScreen">
      <p className="welcomeScreen__logo">
        <span>par</span>
        <span>cel</span>&nbsp;<span>mar</span>
        <span>io</span>
      </p>
      <p className="welcomeScreen__motto">
        Find your best courier and compare prices from different websites
      </p>
    </div>
  );
};

export default WelcomeScreen;

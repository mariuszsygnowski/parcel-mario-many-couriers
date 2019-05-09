import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MainContainer from "./containers/Main/MainContainer";
import HeaderContainer from "./containers/Header/HeaderContainer";
import FooterContainer from "./containers/Footer/FooterContainer";

export default function App() {
  return (
    <div className="parcel_mario">
      {/* <HeaderContainer /> */}
      <MainContainer />
      {/* <FooterContainer /> */}
    </div>
  );
}

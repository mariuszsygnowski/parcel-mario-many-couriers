import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MainContainer from "./containers/Main/MainContainer";
// eslint-disable-next-line
import HeaderContainer from "./containers/Header/HeaderContainer";
// eslint-disable-next-line
import FooterContainer from "./containers/Footer/FooterContainer";
const App = () => {
  return (
    <div className="parcel_mario">
      {/* <HeaderContainer /> */}
      <MainContainer />
      {/* <FooterContainer /> */}
    </div>
  );
};
export default App;

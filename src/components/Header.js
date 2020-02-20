import React from "react";
import Links from "./Links";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getTemp } from "../redux/header";
import { connect } from "react-redux";

const Header = ({ getTemp, temp }) => {
  window.addEventListener("load", getTemp);

  return (
    <header id="header">
      <div style={{ flex: 1, textAlign: "left" }}>
        {temp ? `${Math.floor(temp * 10) / 10}˚` : null}
      </div>
      <a
        data="resume"
        className="link-icon resume"
        href="https://drive.google.com/file/d/18cVkmDipPnGpmmQOG0CwHsr51zPPTABj/view?usp=sharing"
        target="blank"
      >
        <FontAwesomeIcon icon={faIdBadge} alt="resume" />
      </a>
      <Links />
    </header>
  );
};
const mapDispatchToProps = dispatch => ({
  getTemp: () => dispatch(getTemp())
});

const mapStateToProps = state => ({
  temp: state.header.temp
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

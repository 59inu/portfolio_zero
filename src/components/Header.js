import React from "react";
import Links from "./Links";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";

const Header = ({ temp }) => {
  return (
    <header id="header">
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

const mapStateToProps = state => ({
  temp: state.header.temp
});
export default connect(mapStateToProps, null)(Header);

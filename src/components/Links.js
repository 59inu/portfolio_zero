import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Links = () => {
  return (
    <div id="link-container">
      <a className="link-icon" href="https://medium.com/59inu" target="blank">
        <FontAwesomeIcon icon={faMediumM} />
      </a>
      <a className="link-icon" href="https://github.com/59inu" target="blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="link-icon"
        href="mailto: 59inu.dev@gamil.com"
        target="blank"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default Links;

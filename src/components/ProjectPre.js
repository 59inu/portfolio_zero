import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const preview = project => {
  return (
    <div>
      <div className="project_position">{project.position}</div>
      {project.description.concept.map((d, i) => {
        return (
          <div style={{ marginTop: "10px" }} key={i}>
            {d}
          </div>
        );
      })}
      <div
        className="project_stack"
        style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "100" }}
      >
        {project.description.stack}
      </div>
      {Object.keys(project.description.link).map((link, i) => {
        return (
          <span style={{ marginRight: "10px" }} key={i}>
            <FontAwesomeIcon
              icon={faLink}
              style={{ fontSize: "1em", marginRight: "10px" }}
            />
            <a className="project-link" href={project.description.link[link]}>
              {link}
            </a>
          </span>
        );
      })}
    </div>
  );
};

const roll = project => {
  return (
    <div className="project-rollContainer">
      {project.description.roll.map((roll, i) => {
        return (
          <div key={i} className="project-roll">
            {roll}
          </div>
        );
      })}
    </div>
  );
};
const ProjectPre = ({ project, page }) => {
  return page === 0 ? preview(project) : roll(project);
};

export default ProjectPre;

import React, { useState } from "react";
import ProjectPre from "./ProjectPre";
import { projects } from "../data";
import { markSkill, unmark } from "../redux/mark";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLink
} from "@fortawesome/free-solid-svg-icons";
const Projects = ({ style, focus, markSkill, unmark }) => {
  const [page, setPage] = useState(0);
  const [project, setProject] = useState("WALKWITH");
  return (
    <div
      id="project-contatiner"
      className="subsection"
      onMouseLeave={() => {
        unmark();
      }}
    >
      <h3>Project</h3>

      <div className="project-tap">
        {Object.keys(projects).map((p, i) => {
          return (
            <div
              id={p}
              className={`project ${style[p]}`}
              key={i}
              onMouseOver={() => {
                markSkill(p);
                setPage(0);
                setProject(p);
              }}
            >
              <span>{p}</span>
              <span className="period">{projects[p].period}</span>
            </div>
          );
        })}
      </div>
      <div className="section project-screen">
        {page ? (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => {
              setPage(page - 1);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={"screen-changer-unactive"}
          />
        )}

        <div className="project-img">
          {page < 2 ? (
            <ProjectPre
              project={projects[focus ? focus : project]}
              page={page}
            />
          ) : projects[focus ? focus : project].img.length + 2 > page ? (
            <div style={{ alignItems: "center" }}>
              <img
                src={projects[focus ? focus : project].img[page - 2].source}
                alt=""
              />
              <div
                style={{
                  textAlign: "center",
                  margin: "10px 50px 0 50px"
                }}
              >
                {projects[focus ? focus : project].img[page - 2].txt}
              </div>
            </div>
          ) : (
            <div>
              <a
                className="project-link"
                href={projects[focus ? focus : project].blog.uri}
              >
                <FontAwesomeIcon icon={faLink} />
                {projects[focus ? focus : project].blog.title}
              </a>
            </div>
          )}
        </div>
        {projects[project].img.length + 2 > page ? (
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => {
              setPage(page + 1);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronRight}
            className={"screen-changer-unactive"}
          />
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    markSkill: p => dispatch(markSkill(p)),
    unmark: () => dispatch(unmark())
  };
};
const mapStateToProps = state => {
  return {
    style: state.mark.project,
    focus: state.mark.focusProject
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);

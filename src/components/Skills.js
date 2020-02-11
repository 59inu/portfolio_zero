import React from "react";
import { skills } from "../data";
import { connect } from "react-redux";
import { markProject, unmark } from "../redux/mark";

const Skills = ({ style, markProject, unmark }) => {
  return (
    <div className="subsection">
      <h3>Skill</h3>
      <div>
        {skills.map((skill, i) => {
          return (
            <span
              key={i}
              className={style.skill[skill]}
              onMouseOver={e => {
                markProject(e.target.textContent);
              }}
              onMouseLeave={unmark}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    markProject: skill => dispatch(markProject(skill)),
    unmark: () => dispatch(unmark())
  };
};
const mapStateToProps = state => {
  return {
    style: state.mark
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

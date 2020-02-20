import React from "react";
import { skills } from "../data";
import { connect } from "react-redux";
import { actions } from "../redux/mark";

const Skills = ({ style, markSkill, unmark }) => {
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
                markSkill(e.target.textContent);
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
    markSkill: skill => dispatch(actions.project.skill(skill)),
    unmark: () => dispatch(actions.project.unmark())
  };
};
const mapStateToProps = state => {
  return {
    style: state.mark
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

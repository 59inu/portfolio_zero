import { handleActions, createActions } from "redux-actions";
import { skills, projects } from "../data";

const skillStyle = "skill-tag";
const pjUnmarkStyle = "project-unmark";
const pjMarkStyle = "project-mark";
const mark = "mark";

export const actions = createActions({
  PROJECT: {
    SKILL: skill => skill,
    PROJECT: project => project,
    UNMARK: () => {}
  }
});

const initialState = {
  focusProject: "",
  skill: {},
  project: {}
};
skills.forEach(s => {
  initialState.skill[s] = skillStyle;
});
for (let key in projects) {
  initialState.project[key] = pjUnmarkStyle;
}

export default handleActions(
  {
    "PROJECT/PROJECT": (state, action) => {
      const newSkillState = { ...initialState.skill };
      const newPJState = { ...initialState.project };
      const project = action.payload;
      const pSkill = projects[project].skill;
      for (let key in newSkillState) {
        if (pSkill.indexOf(key) >= 0) {
          newSkillState[key] = `${skillStyle} ${mark}`;
        }
      }
      newPJState[project] = pjMarkStyle;
      return {
        ...state,
        project: newPJState,
        skill: newSkillState,
        focusProject: action.payload
      };
    },
    "PROJECT/UNMARK": (state, action) => {
      return {
        ...initialState,
        focusProject: ""
      };
    },
    "PROJECT/SKILL": (state, action) => {
      const newPJState = { ...state.project };
      const skill = action.payload;
      for (let key in newPJState) {
        if (projects[key].skill.indexOf(skill) >= 0) {
          newPJState[key] = pjMarkStyle;
        }
      }
      return {
        ...state,
        project: newPJState
      };
    }
  },
  initialState
);

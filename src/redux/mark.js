import { handleActions, createAction } from "redux-actions";
import { skills, projects } from "../data";

const skillStyle = "skill-tag";
const pjUnmarkStyle = "project-unmark";
const pjMarkStyle = "project-mark";
const mark = "mark";

const MARK_SKILL = "MARK_SKILL";
const MARK_PROJECT = "MARK_PROJECT";
const UNMARK = "UNMARK";

export const markSkill = createAction(MARK_SKILL);
export const markProject = createAction(MARK_PROJECT);
export const unmark = createAction(UNMARK);

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
console.log(initialState);

export default handleActions(
  {
    [MARK_SKILL]: (state, action) => {
      //action의 페이로드는 프로젝트타이틀
      const newSkillState = { ...initialState.skill };
      const newPJState = { ...initialState.project };
      const project = action.payload;
      const pSkill = projects[project].skill;
      console.log(newSkillState);
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
    [UNMARK]: (state, action) => {
      return {
        ...initialState,
        focusProject: ""
      };
    },
    [MARK_PROJECT]: (state, action) => {
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

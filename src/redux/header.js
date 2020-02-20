import { createActions, handleActions } from "redux-actions";
import Axios from "axios";
import { OWapiKey as APIKEY } from "../config";
const actions = createActions({
  HEADER: {
    TEMP: temp => temp
  }
});

const tempApi = ({ coords }) => {
  const { latitude, longitude } = coords;
  return Axios({
    url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric
    `,
    method: "get"
  }).then(res => res.data.main.temp);
};

export const getTemp = position => {
  return dispatch => {
    window.navigator.geolocation.getCurrentPosition(async position => {
      const temp = await tempApi(position);
      return dispatch(actions.header.temp(temp));
    });
  };
};

const initialState = {
  temp: undefined
};
export default handleActions(
  {
    "HEADER/TEMP": (state, action) => ({
      ...state,
      temp: action.payload
    })
  },
  initialState
);

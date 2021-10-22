import {
  GET_TOKEN,
  REMOVE_LOCALSTORAGE,
  SET_LOCALSTORAGE,
} from "../actions/actionType";

let initialState = {
  login: false,
};

export default function localStorage(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALSTORAGE:
      return { login: true };
    case REMOVE_LOCALSTORAGE:
      return { login: false };
    case GET_TOKEN:
      return { login: true };
    default:
      console.log("state", state);
      return state;
  }
}

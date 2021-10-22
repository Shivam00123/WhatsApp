import { SET_LOCALSTORAGE, REMOVE_LOCALSTORAGE, GET_TOKEN } from "./actionType";

export function setLocalStorage() {
  return {
    type: SET_LOCALSTORAGE,
  };
}
export function removeLocalStorage() {
  return {
    type: REMOVE_LOCALSTORAGE,
  };
}

export function storedToken() {
  return {
    type: GET_TOKEN,
  };
}

export function Localstorage(token) {
  return (dispatch) => {
    localStorage.setItem("token", token);
    dispatch(setLocalStorage());
  };
}

export function removelocalstorage() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(removeLocalStorage());
  };
}

export function getToken() {
  return (dispatch) => {
    dispatch(storedToken());
    localStorage.getItem("token");
  };
}

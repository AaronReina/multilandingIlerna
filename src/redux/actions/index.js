import { get } from "./../../services/calls";

export const setRol = (rol) => ({ type: "SET_ROL", rol });
export const logOut = () => ({ type: "LOG_OUT", undefined });
export const removeInfo = () => ({ type: "REMOVE_INFO" });
export const addColor = (colors) => ({ type: "ADD_COLORS", data: colors });
export const closeModals = () => ({ type: "CLOSE_MODAL" });
export const openModals = (info) => ({ type: "OPEN_MODAL", data: info });

export const getColors = () => {
  return async (dispatch) => {
    const response = await get("colors");
    if (response) {
      dispatch({ type: "ADD_COLORS", data: response });
    } else {
      dispatch({ type: "ERROR", state: true });
    }
  };
};

export const getText = () => {
  return async (dispatch) => {
    const response = await get("text");
    if (response) {
      dispatch({ type: "ADD_TEXT", data: response });
    } else {
      dispatch({ type: "ERROR", state: true });
    }
  };
};

export const getImages = () => {
  return async (dispatch) => {
    const response = await get("images");
    if (response) {
      dispatch({ type: "ADD_IMAGES", data: response });
    } else {
      dispatch({ type: "ERROR", state: true });
    }
  };
};

export const getConfig = () => {
  return async (dispatch) => {
    const response = await get("config");
    if (response) {
      dispatch({ type: "ADD_CONFIG", data: response });
    } else {
      dispatch({ type: "ERROR", state: true });
    }
  };
};

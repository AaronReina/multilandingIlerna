import {
  logOut,
  getColors,
  removeInfo,
  setRol,
  getText,
  getImages,
  addColor,
  closeModals,
  openModals,
} from "./index";

export const dispatcher = (actions) => {
  return (dispatch) => {
    const dispatcher = {};
    actions.forEach((e) => {
      switch (e) {
        case "logOut":
          dispatcher.logOut = () => dispatch(logOut());
          break;
        case "getColors":
          dispatcher.getColors = () => dispatch(getColors());
          break;
        case "closeModals":
          dispatcher.closeModals = (colors) => dispatch(closeModals(colors));
          break;
        case "openModals":
          dispatcher.openModals = (colors) => dispatch(openModals(colors));
          break;
        case "addColor":
          dispatcher.addColor = (colors) => dispatch(addColor(colors));
          break;
        case "getText":
          dispatcher.getText = () => dispatch(getText());
          break;
        case "getImages":
          dispatcher.getImages = () => dispatch(getImages());
          break;
        case "removeInfo":
          dispatcher.removeInfo = () => dispatch(removeInfo());
          break;
        case "setRol":
          dispatcher.setRol = (token) => dispatch(setRol(token));
          break;
        default:
          break;
      }
    });
    return dispatcher;
  };
};

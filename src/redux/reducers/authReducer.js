export default (state = {}, action) => {
  switch (action.type) {
    case "SET_ROL":
      state = { ...state, rol: action.token };
      break;
    case "LOG_OUT":
      state = {};
      break;
    default:
      break;
  }
  return state;
};

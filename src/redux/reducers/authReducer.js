export default (state = {}, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      state = { ...state, token: action.token };
      break;
    case "DECODED_TOKEN":
      state = { ...state, info: action.decoded };
      break;
    case "LOG_OUT":
      state = {};
      break;
    default:
      break;
  }
  return state;
};

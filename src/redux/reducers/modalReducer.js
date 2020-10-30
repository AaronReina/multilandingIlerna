export default (state = {}, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      state = { ...state, ...action.data };
      break;
    case "CLOSE_MODAL":
      state = {};
      break;
    default:
      break;
  }
  return state;
};

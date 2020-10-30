export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_COLORS":
      state = { ...state, colors: action.data };
      break;
    case "ADD_TEXT":
      state = { ...state, text: action.data };
      break;
    case "ADD_IMAGES":
      state = { ...state, images: action.data };
      break;
    case "ERROR":
      state = { ...state, data: action.data };
      break;
    case "REMOVE_INFO":
      state = {};
      break;
    default:
      break;
  }
  return state;
};

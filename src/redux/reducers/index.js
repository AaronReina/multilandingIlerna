import { combineReducers } from "redux";
import authReducers from "./authReducer";
import dataReducer from "./dataReducer";
import modalReducer from "./modalReducer";

const reducers = {
  auth: authReducers,
  data: dataReducer,
  modal: modalReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;

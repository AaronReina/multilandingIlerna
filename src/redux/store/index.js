import { createStore, applyMiddleware } from "redux";
import Reducers from "./../reducers";
import thunk from "redux-thunk";

let store = createStore(Reducers, applyMiddleware(thunk));
export default store;

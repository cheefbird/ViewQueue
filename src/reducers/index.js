import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";

export default combineReducers({
  discoverResults: MoviesReducer
});

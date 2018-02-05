import { DISCOVER_MOVIES, SHOW_MOVIE_DETAILS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISCOVER_MOVIES:
      console.log("*** ACTION PAYLOAD: ***\n");
      console.log(action.payload);
      return action.payload;

    case SHOW_MOVIE_DETAILS:
      return action.payload;

    default:
      return state;
  }
};

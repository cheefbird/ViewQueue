import { DISCOVER_MOVIES, SHOW_MOVIE_DETAILS } from "../actions/types";

const INITIAL_STATE = {
  nextPage: 1,
  results: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISCOVER_MOVIES:
      return {
        nextPage: action.nextPage,
        results: [...state.results, ...action.results]
      };

    case SHOW_MOVIE_DETAILS:
      return action.payload;

    default:
      return state;
  }
};

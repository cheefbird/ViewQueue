import { DISCOVER_MOVIES, SHOW_MOVIE_DETAILS } from "../actions/types";

const INITIAL_STATE = {
  nextPage: 1,
  movies: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISCOVER_MOVIES:
      return {
        nextPage: action.nextPage,
        movies: [...state.movies, ...action.movies]
      };

    case SHOW_MOVIE_DETAILS:
      return action.payload;

    default:
      return state;
  }
};

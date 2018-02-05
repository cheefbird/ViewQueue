import { DISCOVER_MOVIES, SHOW_MOVIE_DETAILS } from "./types";
import axios from "axios";

export const discoverMovies = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=7e6576c1d12633c8fd1eee0cb2e995ed"
      )
      .then(response => {
        const { results } = response.data;
        dispatch({
          type: DISCOVER_MOVIES,
          payload: results
        });
      });
  };
};

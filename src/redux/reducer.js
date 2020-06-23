import { usersAPI } from '../api/api';
import { saveStateToLocalStorage, getLocalStorage } from './localStorage';

const GET_MOVIES = 'GET-MOVIES';
const SET_SEARCH_BY = 'SET-SEARCH-BY';
const ADD_GENRES = 'ADD-GENRES';
const DELETE_GENRES = 'DELETE-GENRES';
const SORT_BY_RATING = 'SORT-BY-RATING';
const SORT_BY_DATE = 'SORT-BY-DATE';

const initialState = {
  films: getLocalStorage(),
  searchBy: 'title',
  genres: '',
  rating: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        films: action.payload,
      };
    case SET_SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload,
      };
    case ADD_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case DELETE_GENRES:
      return {
        ...state,
        genres: '',
      };
    case SORT_BY_RATING:
      return {
        ...state,
        rating: true,
      };
    case SORT_BY_DATE:
      return {
        ...state,
        rating: false,
      };
    default:
      return state;
  }
};

export default reducer;

export const deleteGenres = () => ({ type: DELETE_GENRES });

export const getMovies = (newMovies) => ({
  type: GET_MOVIES,
  payload: newMovies,
});

export const addGenres = (newGenres) => ({
  type: ADD_GENRES,
  payload: newGenres,
});

export const setSearchBy = (value) => ({
  type: SET_SEARCH_BY,
  payload: value,
});

export const sortByDate = () => ({ type: SORT_BY_DATE });

export const sortByRating = () => ({ type: SORT_BY_RATING });

export const getMoviesByTitle = (searchBy, value, rating) => {
  return (dispatch) => {
    usersAPI.getFilmsByTitle(searchBy, value, rating).then((data) => {
      dispatch(getMovies(data));
      dispatch(deleteGenres());
      // saveStateToLocalStorage(data);
    });
  };
};
export const getMoviesByGenre = (searchBy, value) => {
  return (dispatch) => {
    usersAPI.getFilmsByGenres(searchBy, value).then((data) => {
      dispatch(getMovies(data));
      dispatch(addGenres(value));
      // saveStateToLocalStorage(data);
    });
  };
};

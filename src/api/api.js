import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactjs-cdp.herokuapp.com/',
});

export const usersAPI = {
  getFilmsByTitle(searchBy, value, rating) {
    const sortField = rating ? 'vote_average' : 'release_date';
    return instance.get(
      `movies?searchBy=${searchBy}&search=${value}&limit=9&sortOrder=desc&sortBy=${sortField}`,
    ).then(data => data.data.data);
  },
  getFilmsByGenres(searchBy, value) {
    return instance.get(
      `movies?searchBy=${searchBy}&filter=${value}&limit=9`,
    ).then(data => data.data.data);
  },
};

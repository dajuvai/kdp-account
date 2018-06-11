import { fetchData, postData } from './helper';

export const loginUserApi = (username, password) => {
  const url = '/api/account/login';
  const data = { username, password };
  return postData(url, data);
};

export const getMovieDetails = (id) => {
  const url = `https://api.themoviedb.org/3/find/${id}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
  return fetchData(url);
};
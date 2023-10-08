import {
  createStore
} from 'vuex'
import axios from 'axios';

const API_KEY = '52fad48c640dbaac2220e83bd45aaa1a';
const mdb = 'https://api.themoviedb.org/3';

export default createStore({
  state: {
    movies: null,
    movie: null,
  },
  getters: {},
  mutations: {
    setMovies(state, movies) {
      console.log(movies);
      state.movies = movies
    },
    setMovie(state, movie) {
      console.log(movie);
      state.movie = movie
    }
  },
  actions: {
    async search(context, movieName) {
      try {
        const response = await axios.get(`${mdb}/search/movie`, {
          params: {
            api_key: API_KEY,
            query: movieName,
          },
        });
        context.commit('setMovies', response.data.results)
      } catch (error) {
        throw error;
      }
    },

    // get single movie
    async getMovie(context, movieId) {
      try {
        const response = await axios.get(`${mdb}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
          },
        });
        context.commit('setMovie', response.data)
      } catch (error) {
        throw error;
      }
    },
  },
  modules: {}
})
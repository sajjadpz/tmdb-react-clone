require('dotenv').config();

const { RESTDataSource } = require("apollo-datasource-rest");

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3";
    this.uri = "/movie/popular";
  }

  async getAllMovies() {
      console.log("called getAllMovies");
    const response = await this.get(this.uri, {
      params: { api_key: `${process.env.REACT_APP_TMDB_API_KEY}` },
    });
    return Array.isArray(response.data.results)
      ? response.map((movie) => this.movieReducer(movie))
      : [];
  }

  async getMovieById({ movieId }) {
    console.log("getMovieById");
    const res = await this.get(`/movie/${movieId}`, {
        params: { api_key: `${process.env.REACT_APP_TMDB_API_KEY}` },
    });
    return this.movieReducer(res);
  }

  movieReducer(movie) {
    return {
      id: movie.id,
      budget: movie.budget,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
      poster_path: movie.poster_path,
      genres: movie.genres,
    };
  }
}

module.exports = TmdbAPI;

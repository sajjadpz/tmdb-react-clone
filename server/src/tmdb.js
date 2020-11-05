const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const { RESTDataSource } = require("apollo-datasource-rest");

class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3";
    this.uri = "/movie/popular";
  }

  async getAllMovies() {
    const response = await this.get(this.uri, {
      api_key: `${process.env.TMDB_API_KEY}`,
    });
    return Array.isArray(response.results)
      ? response.results.map((movie) => this.movieReducer(movie))
      : [];
  }

  async getMovieById({ movieId }) {
    const res = await this.get(`/movie/${movieId}`, {
      api_key: `${process.env.TMDB_API_KEY}`,
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

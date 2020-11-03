module.exports = {
  Query: {
    movies: (_, __, { dataSources }) => dataSources.tmdbAPI.getAllMovies(),
      movie: (_, { id }, { dataSources }) =>
        dataSources.tmdbApi.getMovieById({ movieId: id })
  },
};

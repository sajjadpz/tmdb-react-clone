const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    movies: MovieResult!
    movie(id: ID): Movie
  }

  type Movie {
    id: ID
    budget: Int
    backdrop_path: String
    overview: String
    poster_path: String
    genres: [Genre]!
  }

  type Genre {
    id: ID
    name: String
  }

  type MovieResult {
    movies: [Movie]
  }
`;

module.exports = typeDefs;

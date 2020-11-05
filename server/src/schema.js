const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    movies: [Movie]
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
`;

module.exports = typeDefs;

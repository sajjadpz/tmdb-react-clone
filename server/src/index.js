const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolver = require("./resolver");
const TmdbAPI = require("./tmdb");

const server = new ApolloServer({
  typeDefs,
  resolver,
  dataSources: () => ({
    tmdbAPI: new TmdbAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

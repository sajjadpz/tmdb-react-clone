const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TmdbAPI = require("./tmdb");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    tmdbAPI: new TmdbAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

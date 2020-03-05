import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema";
import resolvers from "./resolvers";
import LifeExpectancyAPI from "./datasources/LifeExpectancyRESTAPI";

const dataSources = (): any => {
  return {
    lifeExpectancyAPI: new LifeExpectancyAPI()
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { BookResolver } from "./resolvers/BookResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { LifeExpectancyResolver } from "./resolvers/LifeExpectancyResolver";

import LifeExpectancyAPI from "./datasources/LifeExpectancyRESTAPI";

require("dotenv").config();

const dataSources = (): any => {
  return {
    lifeExpectancyAPI: new LifeExpectancyAPI()
  };
};

async function main() {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [BookResolver, LifeExpectancyResolver, UserResolver]
  });
  const server = new ApolloServer({ schema, dataSources });
  const { url } = await server.listen(4000);
  console.log(`🚀 Server ready at ${url}`);
}

main();

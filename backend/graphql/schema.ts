import { gql } from "apollo-server";

export const typeDefs = gql`
  """
  The result from query.
  """
  type Result {
    state: String!
    county: String!
    expectancy: String!
  }

  type Query {
    all: [Result]!
  }
`;

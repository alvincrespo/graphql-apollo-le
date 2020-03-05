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
    all(
      """
      The state to filter by.
      """
      state: String
      """
      The life expectancy to search by.
      """
      expectancy: String
    ): [Result]!
  }
`;

import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export default class Result {
  @Field()
  state: string;

  @Field()
  county: string;

  @Field()
  expectancy: string;
}

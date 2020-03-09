import { Resolver, Query, Ctx, Arg } from "type-graphql";
import Result from "../entities/Result";

@Resolver()
export class LifeExpectancyResolver {
  @Query(() => [Result])
  async all(
    @Arg("state", { nullable: true }) state?: string,
    @Arg("expectancy", { nullable: true }) expectancy?: string,
    @Ctx() ctx: Context
  ) {
    const { dataSources } = ctx;
    const filters = { state, expectancy };
    const results = await dataSources.lifeExpectancyAPI.all(filters);

    const normalizedResults = results.map(r => {
      return {
        state: r.state_name || "",
        county: r.county_name || "",
        expectancy: r.le || ""
      };
    });

    return normalizedResults;
  }
}

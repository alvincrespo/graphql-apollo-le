export default {
  Query: {
    all: async (
      parent: any,
      { state = "", expectancy = "" }: any,
      { dataSources }: any
    ) => {
      const filters = { state, expectancy };
      const results = await dataSources.lifeExpectancyAPI.all(filters);

      const normalizedResults = results.map(r => {
        return {
          state: r.state_name,
          county: r.county_name || "",
          expectancy: r.le || ""
        };
      });

      return normalizedResults;
    }
  }
};

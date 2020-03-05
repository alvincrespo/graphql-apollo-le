export default {
  Query: {
    all: async (parent: any, args: any, { dataSources }: any) => {
      const results = await dataSources.lifeExpectancyAPI.all();

      const normalizedResults = results.map(r => {
        return {
          state: r.state_name,
          county: r.county_name,
          expectancy: r.le
        };
      });

      console.log({ normalizedResults });

      return normalizedResults;
    }
  }
};

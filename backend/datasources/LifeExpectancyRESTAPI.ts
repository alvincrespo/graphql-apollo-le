import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

const BASE_URL = "https://data.cdc.gov/resource/5h56-n989.json";

class LifeExpectancyRESTAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("X-App-Token", process.env.APP_TOKEN as string);
  }

  async all(filters: any) {
    const query: any = {};

    if (filters.state) {
      query.state_name = filters.state;
    }

    if (filters.expectancy) {
      query.$where = `le >= ${filters.expectancy}`;
    }

    return await this.get("", query);
  }
}

export default LifeExpectancyRESTAPI;

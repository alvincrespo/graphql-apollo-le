const { RESTDataSource } = require("apollo-datasource-rest");

const BASE_URL = "https://data.cdc.gov/resource/5h56-n989.json";

class LifeExpectancyRESTAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  async all() {
    return await this.get("");
  }
}

export default LifeExpectancyRESTAPI;

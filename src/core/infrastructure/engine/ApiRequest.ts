import Request from "./Request"

/*
* ApiRequest class is a bridge between the Entity to Value object
* This class is responsible for requesting action to API endpoint
*/
export default class ApiRequest extends Request {
  get(url: string, params: {} | null = null) {
    const req = this.setUrl(url)

    if (params === null) {
      req.requestGetAll()
    } else {
      req.requestGet(params);
    }

  }

  post(url: string, params: {}) {

  }
}
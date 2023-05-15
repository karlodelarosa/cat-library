import GetRequests from "./verbs/GetRequests";
import PostRequests from "./verbs/PostRequests";

/*
* Request class the official handler for API requests
* This is where urls are being set and actually calls api endpoint
*/
export default class Request {
  protected url: string = '';
  protected getRequests: GetRequests;
  protected postRequests: PostRequests;

  constructor() {
    this.getRequests = new GetRequests();
    this.postRequests = new PostRequests();
  }

  setUrl(providedUrl: string): this {
    this.url = providedUrl
    return this
  }

  getUrl(): string {
    return this.url
  }

  protected requestGetAll() {
    return this.getRequests._getAll(this.getUrl())
  }

  protected requestGet(params: {}) {
    return this.getRequests._get(this.getUrl(), params)
  }

  protected requestPost(params: {}) {
    return this.postRequests._post(params)
  }
}
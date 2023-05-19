import GetRequests from './verbs/GetRequests'
import PostRequests from './verbs/PostRequests'
import { isOk } from '@/core/domain/specification/isOk'

/*
 * Request class the official handler for API requests
 * This is where urls are being set and call api verbs
 */
export default class Request {
  protected url: string = ''
  protected getRequests: GetRequests
  protected postRequests: PostRequests

  constructor() {
    this.getRequests = new GetRequests()
    this.postRequests = new PostRequests()
  }

  setUrl(providedUrl: string): this {
    this.url = providedUrl
    return this
  }

  getUrl(): string {
    return this.url
  }

  async requestGetAll() {
    const { data, status } = await this.getRequests._getAll(this.getUrl())
    if (isOk(status)) {
      return data
    }
  }

  async requestGet(params: {}) {
    const { data, status } = await this.getRequests._get(this.getUrl(), params)
    if (isOk(status)) {
      return data
    }
  }

  protected requestPost(params: {}) {
    return this.postRequests._post(params)
  }
}

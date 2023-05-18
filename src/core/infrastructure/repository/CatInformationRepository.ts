import type { CatId, BreedParams } from '@/core/domain/types/Cat.type'
import Request from '../engine/Request'

/*
 * Repository classes helps you identify what kind
 * of information your are requesting
 */

export default class CatInformationRepository {
  protected request: Request
  protected requestUrl: string = ''

  constructor(requestUrl: string) {
    this.request = new Request()
    this.requestUrl = requestUrl
  }

  async fetchByBreedId(params: BreedParams) {
    return await this.request.setUrl(this.requestUrl).requestGet(params)
  }

  async fetchByCatId(params: string) {
    return await this.request.setUrl(`${this.requestUrl}/${params}`).requestGetAll()
  }
}

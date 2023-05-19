import type { Id } from '@/core/domain/types/Id.type'
import Request from '../engine/Request'

/**
 * Repository classes helps you identify what kind of information your are requesting
 * Handles request related to Breeds only
 */
export default class BreedRepository {
  protected request: Request
  protected requestUrl: string = ''

  constructor(requestUrl: string) {
    this.request = new Request()
    this.requestUrl = requestUrl
  }

  async fetchAll() {
    return await this.request.setUrl(this.requestUrl).requestGetAll()
  }
}

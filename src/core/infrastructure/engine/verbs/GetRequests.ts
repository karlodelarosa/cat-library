import axios from 'axios'
import type { ApiRequiredResponse } from '@/core/domain/types/ApiResponse.type'

/*
* GetRequests class is responsible for requesting to and API endpoint
* This class should run GET requests only
*/
export default class GetRequests {
  async _get(url: string, params: {}): Promise<object> {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(result => {

        })
        .catch(error => {

        })
    })
  }

  async _getAll(url: string) : Promise<ApiRequiredResponse> {
    return await new Promise((resolve, reject) => {
      axios.get(url)
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        console.error(error)
        reject(error)
      })
    })
  }
}
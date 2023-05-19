import axios from 'axios'
import type { ApiRequiredResponse } from '@/core/domain/types/ApiResponse.type'
import { useAlertStore } from '@/stores/alert'

/*
 * GetRequests class is responsible for requesting GET requests only
 */
export default class GetRequests {
  async _get(url: string, params: {}): Promise<ApiRequiredResponse> {
    return await new Promise((resolve, reject) => {
      axios
        .get(url, { params: params })
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          const store = useAlertStore()
          store.setErrorAlertStatus(true)
          console.error(error)
          reject(error)
        })
    })
  }

  async _getAll(url: string): Promise<ApiRequiredResponse> {
    return await new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          const store = useAlertStore()
          store.setErrorAlertStatus(true)
          console.error(error)
          reject(error)
        })
    })
  }
}

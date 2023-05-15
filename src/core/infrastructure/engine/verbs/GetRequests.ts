import axios from 'axios'

/*
* GetRequests class is responsible for requesting to and API endpoint
* This class should run GET requests only
*/
export default class GetRequests {
  async _get(url: string, params: {}): Promise<object> {
    return new Promise((resolve, reject) => {
      axios.get(url, {

      })
        .then(result => {

        })
        .catch(error => {

        })
    })
  }

  async _getAll(url: string): Promise<object> {
    return new Promise((resolve, reject) => {
      axios.get(url, {

      })
        .then(result => {

        })
        .catch(error => {

        })
    })
  }
}
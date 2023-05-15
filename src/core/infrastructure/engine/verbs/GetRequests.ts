import axios from 'axios'

/*
* GetRequests class is responsible for running GET requests only
*/
export default class GetRequests {
  async _get(url: string, params: {}): Promise<object> {
    return new Promise((resolve, reject) => {
      axios.get('qwe', {

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
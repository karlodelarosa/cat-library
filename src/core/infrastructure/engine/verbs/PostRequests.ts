import axios from 'axios'
import Request from '../Request'

/*
 * PostRequests class is responsible for requesting to and API endpoint
 * This class should run GET requests only
 */
export default class PostRequests {
  async _post(params: {}): Promise<object> {
    return new Promise((resolve, reject) => {
      axios
        .get('qwe', {})
        .then((result) => {})
        .catch((error) => {})
    })
  }
}

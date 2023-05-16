// import type { Id } from "@/core/domain/types/Id.type"
// import ApiRequest from "@/core/infrastructure/engine/ApiRequest"

// /*
// * Repository classes helps you identify what kind
// * of information your are requesting
// */
// export default class CatInformationRepository {
//     protected apiRequest: ApiRequest
//     protected requestUrl: string = ''

//     constructor(requestUrl: string) {
//         this.apiRequest = new ApiRequest()
//         this.requestUrl = requestUrl;
//     }

//     fetchAll() {
//         this.apiRequest.get(this.requestUrl)
//     }

//     fetchById(params: Id) {
//         this.apiRequest.get(this.requestUrl, params)
//     }
// }

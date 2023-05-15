import type { Id } from "@/core/domain/types/Id.types"
import ApiRequest from "../engine/ApiRequest"

/*
* Repository classes helps you identify what kind
* of information your are requesting
*/
export default class BreedRepository {
    protected apiRequest: ApiRequest
    protected requestUrl: string = ''

    constructor(requestUrl: string) {
        this.apiRequest = new ApiRequest()
        this.requestUrl = requestUrl;
    }
    
    fetchAll() {
        this.apiRequest.get(this.requestUrl)
    }

    fetchById(params: Id) {
        this.apiRequest.get(this.requestUrl, params)
    }
}
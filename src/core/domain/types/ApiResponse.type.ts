export interface ApiStatusResponse {
    status: number
}

export interface ApiRequiredResponse extends ApiStatusResponse {
    data: object
}

export interface ApiResponse extends ApiRequiredResponse {
    config: object
    header: object
    request: object
    statusText: string
}

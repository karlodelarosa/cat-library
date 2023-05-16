import { API_SUCCESS } from '@/core/infrastructure/Constants'

export const isOk = (status: string | number) => {
    return API_SUCCESS === status
}
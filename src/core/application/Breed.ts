import BreedRepository from '@/core/infrastructure/repository/BreedRepository'
import type ServiceInterface from '../domain/contract/ServiceInterface'
import { useBreedStore } from '@/stores/breeds'
import { isNull } from '../domain/specification/isNull'
import { API_BREEDS } from '@/core/infrastructure/Constants'

/**
 * This is a sample of a generic service class
 */
export default class Breed implements ServiceInterface {
  protected readonly breedEndpoint = API_BREEDS

  async process(): Promise<void> {
    const store = useBreedStore()
    const breedsStorage = localStorage.getItem('breeds')

    /**
     * I used localstorage to store static data to reduce the API request on each load
     * This logic can be done using cache api but for sample purposes I used localstorage
     */
    if (isNull(breedsStorage)) {
      const breedRepository = new BreedRepository(this.breedEndpoint)
      const breeds = await breedRepository.fetchAll()
      store.setBreeds(breeds!)
      localStorage.setItem('breeds', JSON.stringify(breeds))
    } else {
      store.setBreeds(JSON.parse(breedsStorage!))
    }
  }
}

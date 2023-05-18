import BreedRepository from '@/core/infrastructure/repository/BreedRepository'
import type ServiceInterface from '../domain/contract/ServiceInterface'
import { useBreedStore } from '@/stores/breeds'
import { isNull } from '../domain/specification/isNull'

export default class Breed implements ServiceInterface {
  protected readonly breedEndpoint = 'https://api.thecatapi.com/v1/breeds'

  async process(): Promise<void> {
    const store = useBreedStore()
    const breedsStorage = localStorage.getItem('breeds')
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

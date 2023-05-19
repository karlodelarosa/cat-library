import { computed } from 'vue'
import { useCatsStore } from '@/stores/cats'
import type CommandInterface from '@/core/domain/contract/CommandInterface'
import CatInformationRepository from '@/core/infrastructure/repository/CatInformationRepository'
import { API_SEARCH_BY_BREED } from '@/core/infrastructure/Constants'

/**
 * This is a Command class which only does one task.
 * The task is to get the list of cats in the same breed
 */
export default class GetCatsListByBreed implements CommandInterface {
  protected selectedBreed: string = ''

  constructor(breed: string = '') {
    if (!breed) {
      throw new Error('No breed was specified!')
    }
    this.selectedBreed = breed
  }

  async handle(): Promise<void> {
    const store = useCatsStore()
    const selectedCats = computed(() => store.GET_selectedCatsByBreed)
    const catInformationRepository = new CatInformationRepository(API_SEARCH_BY_BREED)

    const params = {
      page: store.GET_currentPage,
      limit: 10,
      breed_id: this.selectedBreed
    }

    const result = await catInformationRepository.fetchByBreedId(params)

    if (Object.keys(selectedCats.value).length >= 1) {
      store.addNewCats(result!)
    } else {
      store.setSelectedCatsByBreed(result!)
    }
  }
}

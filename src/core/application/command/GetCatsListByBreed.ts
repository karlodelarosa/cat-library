import { computed } from 'vue'
import { useCatsStore } from '@/stores/cats'
import type CommandInterface from '@/core/domain/contract/CommandInterface'
import CatInformationRepository from '@/core/infrastructure/repository/CatInformationRepository'

export default class GetCatsListByBreed implements CommandInterface {
  protected selectedBreed: string = ''

  constructor(breed: string = '') {
    if (!breed) {
      throw new Error('No breed specified!')
    }
    this.selectedBreed = breed
  }

  async handle() {
    const store = useCatsStore()
    const selectedCats = computed(() => store.GET_selectedCatsByBreed)
    const catInformationRepository = new CatInformationRepository(
      `https://api.thecatapi.com/v1/images/search`
    )

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

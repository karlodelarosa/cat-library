import type CommandInterface from '@/core/domain/contract/CommandInterface'
import CatInformationRepository from '@/core/infrastructure/repository/CatInformationRepository'
import { useCatsStore } from '@/stores/cats'

export default class GetCatInformationById implements CommandInterface {
  protected catId: string = ''

  constructor(catId: string = '') {
    if (!catId) {
      throw new Error('No breed specified!')
    }
    this.catId = catId
  }

  async handle() {
    const store = useCatsStore()
    const catInformationRepository = new CatInformationRepository(
      `https://api.thecatapi.com/v1/images`
    )

    const params = {
      id: store.GET_selectedCatId
    }

    const result = await catInformationRepository.fetchByCatId(this.catId)

    store.setSelectedCatInfo(result!)
  }
}

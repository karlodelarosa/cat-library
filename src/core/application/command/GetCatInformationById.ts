import type CommandInterface from '@/core/domain/contract/CommandInterface'
import CatInformationRepository from '@/core/infrastructure/repository/CatInformationRepository'
import { useCatsStore } from '@/stores/cats'
import { API_SEARCH_BY_ID } from '@/core/infrastructure/Constants'

/**
 * This is a Command class which only does one task.
 * The task is to get Cat information using Cat id
 */
export default class GetCatInformationById implements CommandInterface {
  protected catId: string = ''

  constructor(catId: string = '') {
    if (!catId) {
      throw new Error('No id was specified!')
    }
    this.catId = catId
  }

  async handle(): Promise<void> {
    const store = useCatsStore()
    const catInformationRepository = new CatInformationRepository(API_SEARCH_BY_ID)

    const result = await catInformationRepository.fetchByCatId(this.catId)

    store.setSelectedCatInfo(result!)
  }
}

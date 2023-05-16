import type ServiceInterface from "@/core/domain/contract/ServiceInterface";
import type BreedRepository from "@/core/infrastructure/repository/BreedRepository";

export default class BreedService implements ServiceInterface {
  constructor(protected breedRepository: BreedRepository) { }

  process() {
    const result = this.breedRepository.fetchAll();

    return {
      result
    }
  }
}
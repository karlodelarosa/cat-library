import type BreedRepository from "@/core/infrastructure/repository/BreedRepository";

export default class BreedService {
    constructor(protected breedRepository: BreedRepository) {}

    process() {
        const result = this.breedRepository.fetchAll();

        return {
            result
        }
    }
}
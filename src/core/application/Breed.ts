import BreedRepository from "@/core/infrastructure/repository/BreedRepository"
import BreedService from "./service/BreedService"

export default class Breed {
    protected breedService: BreedService

    constructor() {
        this.breedService = new BreedService(new BreedRepository('test'))
    }

    getAll(): object[] {
        const breeds = this.breedService.process()

        return [{}]
    }
}
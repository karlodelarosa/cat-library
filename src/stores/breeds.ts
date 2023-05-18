import { defineStore } from 'pinia'

export const useBreedStore = defineStore('breeds', {
  state: () => {
    return {
      breeds: {},
      selectedBreed: ''
    }
  },
  actions: {
    setBreeds(payload: object) {
      this.breeds = payload
    },
    setSelectedBreed(payload: string) {
      this.selectedBreed = payload
    }
  },

  getters: {
    GET_breeds: (state) => state.breeds,
    GET_selectedBreed: (state) => state.selectedBreed
  }
})

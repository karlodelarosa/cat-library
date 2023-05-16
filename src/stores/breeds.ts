import { defineStore } from 'pinia'

export const useBreedStore = defineStore('breeds', {
  state: () => {
    return {
      breeds: {}
    }
  },
  actions: {
    setBreeds(payload: object) {
      this.breeds = payload
    }
  },

  getters: {
    GET_breeds: (state) => state.breeds,
  },
})

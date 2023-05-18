import { defineStore } from 'pinia'
import * as _ from 'lodash'

export const useCatsStore = defineStore('cats', {
  state: () => {
    return {
      currentPage: 0,
      selectedCatId: '',
      selectedCatsByBreed: {},
      selectedCatInfo: {},
      selectedCatBreedInfo: {},
      isLoadMoreVisible: true
    }
  },
  actions: {
    setSelectedCatsByBreed(payload: object) {
      this.selectedCatsByBreed = payload
    },
    addNewCats(payload: object) {
      const isEqual = _.isEqual(this.selectedCatsByBreed, Object.values(payload))
      if (Array.isArray(this.selectedCatsByBreed) && !isEqual) {
        this.selectedCatsByBreed = [...this.selectedCatsByBreed, ...Object.values(payload)]
      }

      if (isEqual) {
        this.isLoadMoreVisible = false
      }
    },
    nextPage() {
      this.currentPage++
    },
    resetStates() {
      this.currentPage = 0
      this.selectedCatsByBreed = {}
    },
    showLoadMoreButton() {
      this.isLoadMoreVisible = true
    },
    setCatId(payload: string) {
      this.selectedCatId = payload
    },
    setSelectedCatInfo(payload: object) {
      this.selectedCatInfo = payload
    }
  },

  getters: {
    GET_currentPage: (state) => state.currentPage,
    GET_selectedCatsByBreed: (state) => state.selectedCatsByBreed,
    GET_loadMoreStatus: (state) => state.isLoadMoreVisible,
    GET_selectedCatId: (state) => state.selectedCatId,
    GET_selectedCatInfo: (state) => state.selectedCatInfo
  }
})

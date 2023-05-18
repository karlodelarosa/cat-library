<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBreedStore } from '@/stores/breeds'
import { useCatsStore } from '@/stores/cats'
import Cat from '@/core/application/Cat'
import FormGroup from '@/components/molecule/FormGroup.vue'
import GetCatsListByBreed from '@/core/application/command/GetCatsListByBreed'
import SelectBreeds from '@/components/atom/SelectBreeds.vue'

const breedStore = useBreedStore()
const catStore = useCatsStore()
const selectedBreed = computed(() => breedStore.GET_selectedBreed)
const selectedCats: any = computed(() => catStore.GET_selectedCatsByBreed)
const loadMoreVisible = computed(() => catStore.GET_loadMoreStatus)

const catService = new Cat()
watch(selectedBreed, (newVal) => {
  catStore.resetStates()
  catStore.showLoadMoreButton()
  catService.command(new GetCatsListByBreed(newVal))
})

const router = useRouter()
const showDetails = (id: any) => {
  router.push({
    name: 'cat_details',
    params: {
      id: id
    }
  })
}

const showMore = () => {
  catStore.nextPage()
  catService.command(new GetCatsListByBreed(selectedBreed.value))
}
</script>

<template>
  <div class="container py-5">
    <section class="search_form mb-5">
      <FormGroup label-name="BREEDS">
        <SelectBreeds />
      </FormGroup>
    </section>

    <section class="main-content">
      <template v-if="Object.keys(selectedCats).length >= 1">
        <div class="card-columns">
          <div v-for="(data, id) in selectedCats" class="cards">
            <div class="cat-card">
              <div class="cat-img-container">
                <img :src="data.url" alt="Cats" />
              </div>

              <div class="overlay">
                <button
                  @click="showDetails(data.id)"
                  type="button"
                  class="btn btn-primary rounded-pill"
                >
                  See Detail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="loadMoreVisible" class="text-center">
          <button @click="showMore()" type="button" class="btn btn-dark rounded-pill">
            Load more
          </button>
        </div>
      </template>
      <template v-else>
        <div class="alert alert-info" role="alert">No breed selected yet.</div>
      </template>
    </section>
  </div>
</template>

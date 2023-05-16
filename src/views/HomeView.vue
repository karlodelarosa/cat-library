<script setup lang="ts">
import { useRouter } from 'vue-router'
import FormGroup from '@/components/molecule/FormGroup.vue';
import SelectBreeds from '@/components/atom/SelectBreeds.vue';

const mockData = [
  {
    id: '2m5',
    url: 'https://cdn2.thecatapi.com/images/2m5.jpg',
    width: 554,
    height: 378
  },
  {
    id: '2vr',
    url: 'https://cdn2.thecatapi.com/images/2vr.jpg',
    width: 2816,
    height: 2112
  },
  {
    id: '3lm',
    url: 'https://cdn2.thecatapi.com/images/3lm.jpg',
    width: 500,
    height: 332
  },
  {
    id: '5pd',
    url: 'https://cdn2.thecatapi.com/images/5pd.jpg',
    width: 400,
    height: 600
  },
  {
    id: '9bd',
    url: 'https://cdn2.thecatapi.com/images/9bd.jpg',
    width: 640,
    height: 480
  },
  {
    id: '9r4',
    url: 'https://cdn2.thecatapi.com/images/9r4.jpg',
    width: 1900,
    height: 2851
  },
  {
    id: 'bmm',
    url: 'https://cdn2.thecatapi.com/images/bmm.jpg',
    width: 3391,
    height: 2256
  },
  {
    id: 'brf',
    url: 'https://cdn2.thecatapi.com/images/brf.jpg',
    width: 600,
    height: 800
  },
  {
    id: 'udZiLDG_E',
    url: 'https://cdn2.thecatapi.com/images/udZiLDG_E.jpg',
    width: 880,
    height: 1100
  },
  {
    id: 'IEjdx1W5q',
    url: 'https://cdn2.thecatapi.com/images/IEjdx1W5q.jpg',
    width: 3008,
    height: 2000
  }
]

const router = useRouter()
const showDetails = (id: any) => {
  // router.push(`/${id}`)

  router.push({
    name: 'cat_details',
    params: {
      id: id
    }
  })
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
        <div class="card-columns">
          <div v-for="(data, id) in mockData" class="cards">
            <div class="cat-card">
              <div class="cat-img-container">
                <img :src="data.url" alt="" />
              </div>

              <div class="overlay">
                <button @click="showDetails(id)" type="button" class="btn btn-primary rounded-pill">
                  See Detail
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button type="button" class="btn btn-dark rounded-pill">Load more</button>
        </div>
      </section>
    </div>
</template>
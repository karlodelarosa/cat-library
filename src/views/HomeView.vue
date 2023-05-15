<script setup lang="ts">
import { useRouter } from 'vue-router'

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
  <main>
    <div class="container py-5">
      <section class="search_form mb-5">
        <div>
          <label for="cat_breed" class="fw-bold fs-6">BREEDS</label>
          <select id="cat_breed" class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
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
  </main>
</template>

<style>
.bg-svg-wave > svg {
  filter: drop-shadow(0px -13px 14px rgb(0 0 0 / 0.4));
  transform: rotate(180deg);
  position: fixed;
  z-index: -1;
}

.search_form {
  width: 300px;
}

.card-columns {
  margin-bottom: 100px;
}

.cat-card {
  width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
}

.cat-card > .cat-img-container {
  width: 100%;
}

.cat-card > .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s ease;
  display: flex;
  align-items: end;
  justify-content: center;
}

.cat-card > .overlay:hover {
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
}

.cat-card > .overlay > button {
  width: 70%;
  margin-bottom: 20px;
}

.cat-card > .cat-img-container > img {
  width: 100%;
  object-fit: fit;
}

.cat-card > button {
  position: absolute;
  bottom: 5px;
  left: 0;
}

@media (max-width: 575.98px) {
  .card-columns {
    column-count: 1;
  }
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .card-columns {
    column-count: 3;
  }
}

@media (min-width: 992px) {
  .card-columns {
    column-count: 4;
  }
}

@media (min-width: 1200px) {
  .card-columns {
    column-count: 4;
  }
}
</style>

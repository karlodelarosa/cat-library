<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCatsStore } from '@/stores/cats'
import Cat from '@/core/application/Cat'
import GetCatInformationById from '@/core/application/command/GetCatInformationById'
import LeftArrow from '@/components/atom/svg/LeftArrow.vue'
import StarRating from '@/components/atom/StarRating.vue'

const store = useCatsStore()
const route = useRoute()
const router = useRouter()
const back = () => {
  router.back()
}

const catId = route.params.id.toString()
const catService = new Cat()
catService.command(new GetCatInformationById(catId))

const catInfo: any = computed(() => store.GET_selectedCatInfo)
</script>

<template>
  <main>
    <div class="container py-3">
      <section class="search_form mb-4">
        <button @click="back()" type="button" class="btn btn-default-flat">
          <LeftArrow />
          Back
        </button>
      </section>

      <section v-if="catInfo" class="shadow">
        <div class="row">
          <div class="col-md-12">
            <div class="card overflow-hiden">
              <div class="row card-body p-0">
                <div class="col-sm-6 img-wrapper">
                  <div
                    class="img-container"
                    :style="{
                      'background-image': `url('${catInfo.url}')`
                    }"
                  ></div>
                  <img class="actual-img" :src="catInfo.url" alt="sans" />
                </div>

                <div class="col-sm-6 p-5">
                  <div class="cat-description">
                    <h5 class="card-title display-4">{{ catInfo.breeds[0].name }}</h5>
                    <p class="card-text">{{ catInfo.breeds[0].description }}</p>
                  </div>

                  <div class="cat-attribute">
                    <div class="d-flex flex-row fw-bold fs-6 mb-2">
                      ORIGIN:
                      <p class="fw-normal m-0 ms-1">{{ catInfo.breeds[0].origin }}</p>
                    </div>

                    <p class="fst-italic">{{ catInfo.breeds[0].temperament }}</p>
                  </div>

                  <div class="cat-attribute">
                    <dl>
                      <dd class="fw-normal d-flex flex-row align-items-center">
                        <span class="me-2">Stranger Friendly:</span>
                        <StarRating :rating="catInfo.breeds[0].stranger_friendly" />
                      </dd>
                      <dd class="fw-normal d-flex flex-row align-items-center">
                        <span class="me-2">Child Friendly:</span>
                        <StarRating :rating="catInfo.breeds[0].child_friendly" />
                      </dd>

                      <dd class="fw-normal d-flex flex-row align-items-center">
                        <span class="me-2">Energy Level:</span>
                        <StarRating :rating="catInfo.breeds[0].energy_level" />
                      </dd>

                      <dd class="fw-normal d-flex flex-row align-items-center">
                        <span class="me-2">Health Issues:</span>
                        <StarRating :rating="catInfo.breeds[0].health_issues" />
                      </dd>
                    </dl>
                  </div>

                  <a
                    :href="`https://www.google.com/search?q=${catInfo.breeds[0].name}`"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style>
.btn-default-flat {
  background-color: #d6d6d6 !important;
  color: black !important;
  transition: color 0.2s ease;
}

.btn-default-flat:hover {
  filter: brightness(95%);
  /* color: black!important; */
}

.card.overflow-hiden {
  overflow: hidden !important;
}

.img-wrapper {
  position: relative;
  overflow: hidden !important;
  padding: 0;
}

.img-container {
  width: 100%;
  min-height: 700px;
  display: flex;
  align-items: center !important;
  background-position: center;
  background-size: cover;
  filter: blur(15px);
}

.actual-img {
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  object-fit: contain;
}

.cat-description {
  margin-bottom: 20px;
}

.cat-attribute {
  margin-bottom: 30px;
}
</style>

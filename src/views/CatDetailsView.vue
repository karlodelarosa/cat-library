<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const back = () => {
    router.back()
}
</script>

<template>
  <main>
    <div class="container py-3">
      <section class="search_form mb-4">
        <button @click="back()" type="button" class="btn btn-default-flat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Back
        </button>
      </section>

      <section class="shadow">
        <div class="row">
          <div class="col-md-12">
            <div class="card overflow-hiden">
              <div class="row card-body p-0">
                <div class="col-sm-6 img-wrapper">
                  <div class="img-container"></div>
                  <img
                    class="actual-img"
                    src="https://cdn2.thecatapi.com/images/udZiLDG_E.jpg"
                    alt="sans"
                  />
                </div>

                <div class="col-sm-6 p-5">
                  <div class="cat-description">
                    <h5 class="card-title display-4">Abyssinian</h5>
                    <p class="card-text">
                      The Abyssinian is easy to care for, and a joy to have in your home. They’re
                      affectionate cats and love both people and other animals.
                    </p>
                  </div>

                  <div class="cat-attribute">
                    <div class="d-flex flex-row fw-bold fs-6 mb-2">
                      ORIGIN:
                      <p class="fw-normal m-0">Egypt</p>
                    </div>

                    <p class="fst-italic">Active, Energetic, Independent, Intelligent, Gentle</p>
                  </div>

                  <a href="#" class="btn btn-primary">Download now</a>
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
  background-image: url('https://cdn2.thecatapi.com/images/IEjdx1W5q.jpg');
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
  margin-bottom: 50px;
}
</style>

<template>
  <div v-if="details" class="container mx-auto">
    <!--Section movie Info-->
    <div class="m-info border-b border-gray-800">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div class="flex-none">
          <img class="sm:w-300" :src="imageLink(details.poster_path)" alt="" />
        </div>
        <div class="md:ml-24">
          <h2 class="text-4xl font-semibold">{{ details.title }}</h2>
          <div class="flex flex-wrap items-center text-sm mt-1">
            <img class="w-3 mr-1" src="../assets/img/star.png" alt="" />
            <span>{{ details.vote_average * 10 + "%" }}</span>
            <span class="mx-2">|</span>
            <span>{{ details.release_date }}</span>
            <span class="mx-2">|</span>
            <span
              v-for="genre in details.genres"
              :key="genre.id"
              class="text-sm mr-2"
            >
              {{ genre.name }}
            </span>
          </div>

          <p class="mt-8">
            {{ details.overview }}
          </p>
          <div class=" items-end">
            <div class="mt-12">
              <h4 class="font-semibold">Featured Crew</h4>
              <div class=" mt-4">
                <div
                  v-for="member in details.credits.crew.slice(0, 3)"
                  :key="member.id"
                  class="mb-3"
                >
                  <div>{{ member.name }}</div>
                  <div class="text-sm">{{ member.department }}</div>
                </div>
              </div>
            </div>

            <div class="mt-12">
              <button
                class="text-white bg-rose hover:bg-shade rounded font-semibold px-5 py-4"
              >
                Watch Trailler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Section cast Info-->
    <div class="movie-cast border-b border-gray-800">
      <div class="ml-auto px-4 py-16">
        <h2 class="text-4xl font-semibold mb-8 text-rose">Cast</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <!--Card Items Grid-->
          <div
            v-for="actor in details.credits.cast.slice(0, 4)"
            :key="actor.id"
          >
            <a :href="imageLink(actor.profile_path)" target="_blank">
              <img :src="imageLink(actor.profile_path)" alt="" />
            </a>
            <div class="mt-2">
              <p class="text-lg mt-1 hover:text-shade">{{ actor.name }}</p>
              <p class="text-sm">
                {{ actor.character }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Section Similar movies-->
    <div class="similar-movies border-b border-gray-800">
      <div class="ml-auto px-4 py-16">
        <h2 class="text-4xl font-semibold mb-8 text-rose">You may also like...</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <div
            v-for="similarMovie in similarMovies"
            :key="similarMovie.id"
            class="mt-8"
          >
            <router-link :to="`/detail/${similarMovie.id}`">
              <img
                :src="imageLink(similarMovie.poster_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
              <div class="mt-2">
                <p class="text-lg mt-1 hover:text-shade">
                  {{ similarMovie.title }}
                </p>
                <div class="flex flex-wrap items-center text-sm mt-1">
                  <img class="w-3" src="../assets/img/star.png" alt="" />
                  <span class="mx-1">{{
                    similarMovie.vote_average * 10 + "%"
                  }}</span>
                  <span class="mr-1">|</span>
                  <span> {{ similarMovie.release_date }} </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      similarMovies: [],
      details: {},
      genres: [],
      tmdbApiKey: "d4a1493081489cf0da61cf46c66ed005",
    };
  },
  mounted() {
    this.getDetails();
    this.getSimilarMovies();
  },
  watch: {
    '$route.params.movieId': function () {
      this.getDetails();
      this.getSimilarMovies();
    }
  },
  methods: {
    getDetails() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieId}?api_key=${this.tmdbApiKey}&append_to_response=images,credits,videos`
      )
        .then((response) => response.json())
        .then((data) => {
          this.details = data;
        });
    },
    getSimilarMovies() {
      fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieId}/recommendations?api_key=${this.tmdbApiKey}`)
      .then(response => response.json())
      .then(data => {
          this.similarMovies = data.results.slice(0, 3);
      });
    },
    imageLink(filePath) {
      return `https://image.tmdb.org/t/p/w500${filePath}`;
    },
  },
};
</script>

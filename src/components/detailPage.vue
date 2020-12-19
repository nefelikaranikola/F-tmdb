<template>
  <div
    v-if="details"
    class="container mx-auto"
  >
    <!--Section movie Info-->
    <div class="m-info border-b border-gray-800">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div class="flex-none">
          <img :src="imageLink(details.poster_path)" alt="" />
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

          <div class="mt-12">
            <h4 class="font-semibold">Featured Crew</h4>
            <div class="flex flex-col mt-4">
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

    <!--Section cast Info-->
    <div class="movie-cast border-b border-gray-800">
      <div class="mx-auto px-4 py-16">
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
              <img
                :src="imageLink(actor.profile_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
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

    <!--Section movie Images-->
    <div class="movie-cast border-b border-gray-800">
      <div class="mx-auto px-4 py-16">
        <h2 class="text-4xl mb-8 font-semibold text-rose">Images</h2>
        <div
          class="grid grid-cols-3 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-3 gap-8"
        >
          <!--Card Items Grid-->
          <div
            v-for="image in details.images.backdrops.slice(0, 9)"
            :key="image.file_path"
          >
            <a :href="imageLink(image.file_path)" target="_blank">
              <img
                :src="imageLink(image.file_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
            </a>
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
      details: {},
      tmdbApiKey: "d4a1493081489cf0da61cf46c66ed005",
    };
  },
  mounted() {
    this.getDetails();
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
    imageLink(filePath) {
      return `https://image.tmdb.org/t/p/w500/${filePath}`;
    },
  },
};
</script>

<style scoped></style>

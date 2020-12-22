<template>
  <div class="container mx-auto px-4 py-10">
    <main class="max-w-7xl px-4">
      <div class="sm:text-center lg:text-left">
        <h1
          class="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-5xl"
        >
          <span class="block text-white">Welcome to ftmdb</span>
          <span class="block text-rose text-3xl">online movie library</span>
        </h1>
        <p
          class="mt-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          Browse through the biggest movie & TV show library in the world and
          pick your favorite to watch! Can't decide? Click below and watch a
          random one!
        </p>

        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <router-link class="rounded-md shadow" to="/random">
            <a
              href="#"
              class="w-full flex items-center justify-center px-4 py-3 border border-transparent text-white font-medium rounded-md bg-rose hover:bg-shade md:py-4 md:text-lg md:px-10"
            >
              Watch now
            </a>
          </router-link>
        </div>
      </div>
    </main>

    <!-- 2nd section -->
    <div class="container mt-16 md:mt-16 mx-auto px-4 pt-16">
      <div class="popular-movies">
        <h2 class="tracking-wider text-rose text-lg font-semibold">
          Popular Movies
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <!--Card Items Grid-->
          <div
            v-for="popularMovie in popularMovies"
            :key="popularMovie.id"
            class="mt-8"
          >
            <router-link :to="`/detail/${popularMovie.id}`">
              <img
                :src="moviePosterLink(popularMovie.poster_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
              <div class="mt-2">
                <p class="text-lg mt-1 hover:text-shade">
                  {{ popularMovie.title }}
                </p>
                <div class="flex flex-wrap items-center text-sm mt-1">
                  <img class="w-3" src="../assets/img/star.png" alt="" />
                  <span class="mx-1">
                    {{ popularMovie.vote_average * 10 + "%" }}
                  </span>
                  <span class="mr-1">|</span>
                  <span> {{ popularMovie.release_date }} </span>
                </div>
                <span
                  v-for="genreId in popularMovie.genre_ids.slice(0, 3)"
                  :key="genreId"
                  class="text-sm"
                >
                  {{ getMovieGenreName(genreId) }}
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd section -->
    <div class="container mt-16 mx-auto px-4 pt-16">
      <div class="playing-now">
        <h2 class="tracking-wider text-rose text-lg font-semibold">
          Top Rated
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          <!--Card Items Grid-->
          <div v-for="topMovie in topMovies" :key="topMovie.id" class="mt-8">
            <router-link :to="`/detail/${topMovie.id}`">
              <img
                :src="moviePosterLink(topMovie.poster_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
              <div class="mt-2">
                <p class="text-lg mt-1 hover:text-shade">
                  {{ topMovie.title }}
                </p>
                <div class="flex flex-wrap items-center text-sm mt-1">
                  <img class="w-3" src="../assets/img/star.png" alt="" />
                  <span class="mx-1">{{
                    topMovie.vote_average * 10 + "%"
                  }}</span>
                  <span class="mr-1">|</span>
                  <span> {{ topMovie.release_date }} </span>
                </div>
                <span
                  v-for="genreId in topMovie.genre_ids.slice(0, 3)"
                  :key="genreId"
                  class="text-sm"
                >
                  {{ getMovieGenreName(genreId) }}
                </span>
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
  name: "Home",
  components: {},
  data() {
    return {
      popularMovies: [],
      topMovies: [],
      genres: [],
      tmdbApiKey: "d4a1493081489cf0da61cf46c66ed005",
    };
  },
  mounted() {
    this.getGenres();
    this.getPopularMovies();
    this.getTopMovies();
  },

  methods: {
    getPopularMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.tmdbApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.popularMovies = data.results.slice(0, 10);
        });
    },
    getTopMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.tmdbApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.topMovies = data.results.slice(0, 10);
        });
    },
    getGenres() {
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.tmdbApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.genres = data.genres;
        });
    },
    moviePosterLink(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    getMovieGenreName(genreId) {
      if (!this.genres) {
        return "";
      }

      let genre = this.genres.find((genre) => {
        return genre.id == genreId;
      });

      return genre.name;
    },
  },
};
</script>

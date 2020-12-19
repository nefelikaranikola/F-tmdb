<template>
    <div >
        <div class="container mt-24 md:mt-24 mx-auto px-4 pt-16" to="/detail">
            <div class="popular-movies">
                <h2 class="tracking-wider text-rose text-lg font-semibold mt-24">
                    Category
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <!--Card Items Grid-->
                    <div
                        v-for="popularMovie in popularMovies"
                        :key="popularMovie.id"
                        class="mt-8"
                    >
                       <a href="#">
                            <img :src="moviePosterLink(popularMovie.poster_path)"  alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">{{ popularMovie.title }}</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <img class="w-3" src="../assets/img/star.png" alt="">
                                <span class="mx-1"> {{ popularMovie.vote_average *10 + "%"}} </span>
                                <span class="mr-1">|</span>
                                <span> {{ popularMovie.release_date}} </span>
                            </div>
                            <span
                                v-for="genreId in popularMovie.genre_ids"
                                :key="genreId"
                                class="text-sm"
                            >
                                {{ getMovieGenreName(genreId) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {

}
</script>

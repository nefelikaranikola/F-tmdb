<template>
  <div class="">
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
            <div class="text-sm">
                    Adventure, Drama, Fantasy
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

<template>
    <div class="container mx-auto">
    <!--Section movie Info-->
        <div
            v-if="details"
            class="m-info border-b border-gray-800 text-center"
        >
            <div class=" text-center">
                <button @click="getDetails()" class="items-center text-white bg-rose hover:bg-shade rounded font-semibold px-5 py-4">Reroll</button>
            </div>
            <div class="container mx-auto px-4 py-16">
                <div class="">
                    <img :src="imageLink(details.poster_path)" class="mx-auto">
                </div>
                <div class="mt-12">
                    <h2 class="text-4xl font-semibold">{{ details.title }}</h2>
                    <div class="flex flex-wrap justify-center items-center text-sm mt-2">
                        <img class="w-3 mr-1" src="../assets/img/star.png" alt="">
                        <span class="">{{ details.vote_average *10 + "%"}}</span>
                        <span class="mx-2">|</span>
                        <span>{{ details.release_date }}</span>
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
            topRated: [],
            tmdbApiKey: "d4a1493081489cf0da61cf46c66ed005"
        }
    },
    mounted() {
        this.getTopRated();
    },
    methods: {
        getDetails() {
            this.details = this.topRated[Math.floor(Math.random()*this.topRated.length)];
        },
        getTopRated() {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.tmdbApiKey}`)
            .then(response => response.json())
            .then(data => {
                this.topRated = data.results;
                this.getDetails();
            });
        },
        imageLink(filePath) {
            return `https://image.tmdb.org/t/p/w500${filePath}`;
        }
    }
}
</script>

<style scoped>

</style>

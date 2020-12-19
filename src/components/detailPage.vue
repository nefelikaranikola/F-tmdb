<template>
    <div class="container mx-auto">
    <!--Section movie Info-->
        <div class="m-info border-b border-gray-800">
            <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
            <div class="flex-none">
                <img src="../assets/img/harry.jpg" alt="Harry">
            </div>
            <div class="md:ml-24">
                <h2 class="text-4xl font-semibold">Harry Potter (2011)</h2>
                <div class="flex flex-wrap items-center text-sm mt-1">
                    <span class="">81%</span>
                    <span class="mx-2">|</span>
                    <span>2011</span>
                    <span class="mx-2">|</span>
                    <span class="">Adventure, Drama, Fantasy</span>
                </div>

                <p class="mt-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quasi placeat earum aut blanditiis amet quo aperiam autem temporibus, error, consequuntur accusantium. Animi minus at unde inventore nemo tenetur rem, dignissimos nulla esse natus commodi eligendi, facilis, beatae dolore ut!
                </p>

                <div class="mt-12">
                    <h4 class="font-semibold">Featured Crew</h4>
                    <div class="flex mt-4">
                        <div class="">
                            <div>Someone Som</div>
                            <div class="text-sm">Screenplay, Director</div>
                        </div>
                        <div class="ml-8">
                            <div>Some Other</div>
                            <div class="text-sm">Screenplay</div>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <button class="flex items-center text-white bg-rose hover:bg-shade rounded font-semibold px-5 py-4">Watch Trailler</button>
                </div>
            </div>
            </div>
        </div>

        <!--Section cast Info-->
        <div class="movie-cast border-b border-gray-800">
            <div class="mx-auto px-4 py-16">
                <h2 class="text-4xl font-semibold text-rose">Cast</h2>
                <div class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <!--Card Items Grid-->
                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/emma.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Emma Watson</a>
                            <div class="text-sm">
                                 Hermiony Granger
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Section movie Images-->
        <div class="movie-cast border-b border-gray-800">
            <div class="mx-auto px-4 py-16">
                <h2 class="text-4xl font-semibold text-rose">Images</h2>
                <div class="grid grid-cols-3 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <!--Card Items Grid-->
                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/jinny.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
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

<style scoped>

@media screen and (min-width: 600px) {
  img {
    width: 24rem;
  }
}
</style>

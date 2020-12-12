<template>
    <div class="container mx-auto px-4 py-10">
        <main class=" max-w-7xl px-4">
            <div class="sm:text-center lg:text-left">
                <h1 class="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-5xl">
                    <span class="block text-white">Welcome to ftmdb</span>
                    <span class="block text-rose text-3xl">online movie library</span>
                </h1>
                <p class="mt-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Browse through the biggest movie & TV show library in the world and pick your favorite to watch! Can't decide? Click below and watch a random one!
                </p>

                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-white font-medium rounded-md bg-rose hover:bg-shade md:py-4 md:text-lg md:px-10">
                            Watch now
                        </a>
                    </div>
                </div>
            </div>
        </main>


        <!-- 2nd section -->
        <div class="container mt-24 mx-auto px-4 pt-16">
            <div class="popular-movies">
                <h2 class="tracking-wider text-rose text-lg font-semibold">
                    Popular Movies
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <!--Card Items Grid-->
                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/harry.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Potter and the Deathly Hallows</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">81%</span>
                                <span>|</span>
                                <span>14 July 2011</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Drama, Fantasy
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/notebook.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">The Notebook</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">78%</span>
                                <span>|</span>
                                <span>2 July 2004</span>
                            </div>
                            <div class="text-sm">
                                Drama, Romance
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/wolf.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">The Wolf of Wallstreet</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">82%</span>
                                <span>|</span>
                                <span>26 Dec 2013</span>
                            </div>
                            <div class="text-sm">
                                 Biography, Drama, Crime
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/joker.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Joker</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">85%</span>
                                <span>|</span>
                                <span>3 Oct 2019</span>
                            </div>
                            <div class="text-sm">
                                 Crime, Drama, Thriller
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/lord.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Lord of the Rings</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">87%</span>
                                <span>|</span>
                                <span>18 Dec 2002</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Drama, Action
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/inception.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Inception</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">88%</span>
                                <span>|</span>
                                <span>24 Aug 2010</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Action, Sci-Fi
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/knight.jpeg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">The Dark Knight Rises</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">84%</span>
                                <span>|</span>
                                <span>21 Aug 2012</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Action
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3rd section -->
        <div class="container mt-16 mx-auto px-4 pt-16">
            <div class="playing-now">
                <h2 class="tracking-wider text-rose text-lg font-semibold">
                    Playing Now
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <!--Card Items Grid-->
                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/harry.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">81%</span>
                                <span>|</span>
                                <span>14 July 2011</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Drama, Fantasy
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/notebook.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">78%</span>
                                <span>|</span>
                                <span>2 July 2004</span>
                            </div>
                            <div class="text-sm">
                                Drama, Romance
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/wolf.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">82%</span>
                                <span>|</span>
                                <span>26 Dec 2013</span>
                            </div>
                            <div class="text-sm">
                                 Biography, Drama, Crime
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/joker.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">85%</span>
                                <span>|</span>
                                <span>3 Oct 2019</span>
                            </div>
                            <div class="text-sm">
                                 Crime, Drama, Thriller
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/lord.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">87%</span>
                                <span>|</span>
                                <span>18 Dec 2002</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Drama, Action
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/inception.jpg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">88%</span>
                                <span>|</span>
                                <span>24 Aug 2010</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Action, Sci-Fi
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <a href="#">
                            <img src="../assets/img/knight.jpeg" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-1 hover:text-shade">Harry Poter</a>
                            <div class="flex flex-wrap items-center text-sm mt-1">
                                <span class="">star</span>
                                <span class="mx-2">84%</span>
                                <span>|</span>
                                <span>21 Aug 2012</span>
                            </div>
                            <div class="text-sm">
                                 Adventure, Action
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {

    }
}
</script>

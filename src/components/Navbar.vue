<template>
    <div>
        <nav class="border-b border-gray-800">
            <div class="container mx-auto flex items-center justify-between px-4 py-6">
                <div class="flex items-center">

                    <img class="w-16" src="../assets/img/corn.svg" alt="">

                    <router-link class="text-rose flex-center position-ref full-height hover:text-shade font-semibold ml-16" to="/">Home</router-link>

                    <router-link class="px-3" to="/">

                        <button class="text-rose flex-center position-ref full-height hover:text-shade ml-6 font-semibold" style="transition:all .15s ease" font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full type="button" v-on:click="toggleDropdown()" ref="btnDropdownRef">
                        Genres
                        </button>

                        <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-rose z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">

                            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full hover:bg-shade whitespace-no-wrap bg-transparent text-white">
                                Drama
                            </a>

                            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full hover:bg-shade whitespace-no-wrap bg-transparent text-white">
                                Comedy
                            </a>
                            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full hover:bg-shade whitespace-no-wrap bg-transparent text-white">
                                Sci-fi
                            </a>
                            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full hover:bg-shade whitespace-no-wrap bg-transparent text-white">
                                Mystery
                            </a>
                            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full hover:bg-shade whitespace-no-wrap bg-transparent text-white">
                                Musical
                            </a>
                            <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full hover:bg-shade whitespace-no-wrap bg-transparent text-white">
                                Documentary
                            </a>
                        </div>

                    </router-link>
                    <router-link class="text-rose flex-center position-ref full-height hover:text-shade ml-6 font-semibold" to="/detail">Random</router-link>
                </div>
            </div>
        </nav>

        <div class="container mx-auto">
            <router-view />
        </div>
    </div>
</template>

<script>
import Popper from "popper.js";

    export default {
        name: 'Navbar',
        components: {

        },
        data() {
            return {
                dropdownPopoverShow: false,
                links: [
                    {
                        id: 0,
                        name: 'Home',
                        path: '/',
                    },
                    {
                        id: 1,
                        name: 'Genres',
                        path: '/',
                    },
                    {
                        id: 2,
                        name: 'Random',
                        path: '/detail',
                    }
                ],
            }
        },
        methods: {
        toggleDropdown: function(){
            if(this.dropdownPopoverShow){
                this.dropdownPopoverShow = false;
            } else {
                this.dropdownPopoverShow = true;
                new Popper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
                placement: "bottom-start"
                });
            }
            }
        }
    }
</script>

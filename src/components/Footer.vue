<template>
    <footer class="py-5 border-t border-gray-800">
        <ul class="flex justify-center">
            <li
                v-for="route in sitemap"
                :key="route.path"
                class="mx-3"
            >
                <a :href="route.path">{{ route.name }}</a>
            </li>
        </ul>
        <p class="mt-5">{{ footerText }}</p>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    components: {
    },
    data() {
        return {
            footerText: '© Copyright 2020',
        }
    },
    computed: {
        sitemap: function () {
            return this.$router.options.routes.filter((route) => {
                return route.sitemap;
            });
        }
    },
}
</script>

<style>

footer {
    color: white;
    text-align: center;
}
</style>

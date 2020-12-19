<template>
    <footer>
        <p class="py-5 bg-gray-900 border-t border-gray-800">{{ footerText }}</p>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    data() {
        return {
            footerText: '© Copyright 2020'
        }
    }
}
</script>

<style>

footer {
    color: white;
    text-align: center;
}
</style>

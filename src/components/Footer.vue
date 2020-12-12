<template>
    <footer>
        <p>{{ footerText }}</p>
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
    background-color: #0D0D0D;
    padding: 10px;
    text-align: center;
}
</style>

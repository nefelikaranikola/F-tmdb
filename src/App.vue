<template>
  <div id="app" class="mx-auto font-sans bg-gray-900 text-white">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

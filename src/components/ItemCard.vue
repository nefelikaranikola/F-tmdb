<!-- In use
<VacationCard
  img="/img/cancun.jpg"
  imgAlt="Beach in Cancun"
  eyebrow="Private Villa"
  title="Relaxing All-Inclusive Resort in Cancun"
  pricing="$299 USD per night"
  url="/vacations/cancun"
/>-->

<!-- ./components/VacationCard.vue -->
<template>
  <div>
    <img class="rounded" :src="img" :alt="imgAlt">
    <div class="mt-2">
      <div>
        <div class="text-xs text-gray-600 uppercase font-bold">{{ eyebrow }}</div>
        <div class="font-bold text-gray-700 leading-snug">
          <a :href="url" class="hover:underline">{{ title }}</a>
        </div>
        <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ItemCard',
    props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
  }
</script>

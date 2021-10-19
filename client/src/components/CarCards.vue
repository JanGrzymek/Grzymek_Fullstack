<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around mx-12">
      <CarCard v-for="c of cars" :key="c.id" :car="c" @getCards="$emit('getCards')"/>
    </div>
  </div>
</template>

<script>
import CarCard from './CarCard.vue';

export default {
  props: {
    cars: {
      Type: Array,
      default: () => [],
    },
  },
  components: { CarCard },

};
</script>

<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" :src="car.image"></v-img>

      <v-card-title>{{ car.title }}</v-card-title>

      <v-card-text>
        <div>
          Owner: {{ car.first_name }} {{ car.last_name }}<br />
          Year: {{ car.year_of_make }} <br />
          Miles: {{ car.miles }}<br /><br />
          <span v-if="car.status == 'available'"> Price: {{ car.price }}<br /><br /> </span>
          <span v-else> Price: N/A<br /><br /> </span>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions style="height: 60px">
        <span v-if="car.status == 'available'">
          <v-btn color="white--text purple" :to="`/details/${car.id}`">
            Details
          </v-btn>
        </span>
        <v-spacer></v-spacer>
        <v-btn color="white--text red" @click="deleteCar()">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    car: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async deleteCar() {
      try {
        await axios({
          method: 'DELETE',
          url: 'http://localhost:3000/cars/' + this.car.id,
        });
        
      } catch (error) {
        console.log(error);
      }
      this.$emit('getCards')
    },
  },
};
</script>

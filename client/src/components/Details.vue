s<template>
  <div>
    <v-card class="mx-auto my-12" style="width: 400px">
      <v-img height="400" :src="car.image"></v-img>

      <v-card-title>{{ car.title }}<span v-if="car.status != 'available'">*RESERVED*</span></v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th>
              Price
            </th>
            <th>
              Miles
            </th>
            <th>
              Year of Make
            </th>
            <th>
              Current Owner
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {{ car.price }}
            </th>
            <th>
              {{ car.miles }}
            </th>
            <th>
              {{ car.year_of_make }}
            </th>
            <th>
              {{ car.first_name }}
              {{ car.last_name }}
            </th>
          </tr>
        </tbody>
      </v-simple-table>
      <v-card-text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions style="height: 60px">
        <v-btn color="white--text purple" to="/">
          Go back
        </v-btn>
        <v-spacer></v-spacer>
        <span v-if="car.status == 'available'">
          <v-btn color="white--text red" @click="patchStatus($event)">
            Order Car
          </v-btn>
        </span>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: {
      type: String,
    },
    cars: {
      Type: Array,
      default: () => [],
    },
  },
  computed: {
    car() {
      return this.cars.find((el) => el.id == this.id);
    },
  },
  methods: {
    async patchStatus() {
      try {
        this.car.status = 'sold';
        await axios({
          method: 'PATCH',
          url: 'http://localhost:3000/cars/' + this.id,
          data: this.car,
        });
      } catch (error) {
        console.log(error);
      }
    },
    created() {
      this.getCards();
    },
  },
};
</script>

<style lang="scss" scoped></style>

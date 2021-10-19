<!--<template>
  <v-app>
    <v-main>
      <v-container>
        <p class="text-h2 text-center">Viel Erfolg!</p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>
-->
<template>
  <v-app>
    <v-main>
      <LogoBar />
      <router-view :cars="data" @getCards="getCards"/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import LogoBar from '@/components/LogoBar.vue';

export default {
  name: 'Home',
  data() {
    return {
      data: null,
    };
  },
  components: {
    LogoBar,
  },
  methods: {
    async getCards() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/cars',
          method: 'GET',
        });
        this.data = data.data;
        console.log(this.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getCards();
  },
};
</script>

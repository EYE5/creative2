<template>
  <div class="favorite">
    <Apartment
      v-for="apartment of favorite"
      :apartment="apartment"
      :favorite="true"
      :key="apartment.id"
      @toggle="toggleFavorite"
    />
  </div>
</template>
<script>
import Apartment from "@/components/apartment.vue";

export default {
  name: "favorite",
  components: {
    Apartment,
  },
  computed: {
    favorite() {
      return this.$store.state.favorite;
    },
  },
  methods: {
    toggleFavorite(apartment) {
      this.$store.commit("toggleFavorite", apartment);
    },
  },
};
</script>

<style scoped>
.favorite {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

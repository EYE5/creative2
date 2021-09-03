<template>
  <div class="feed">
    <Apartment
      v-for="apartment of apartments"
      :apartment="apartment"
      :favorite="isInFavorite(apartment)"
      :key="apartment.id"
      @toggle="toggleFavorite"
    />
  </div>
</template>

<script>
import Apartment from "@/components/apartment.vue";

export default {
  name: "Feed",
  components: {
    Apartment,
  },
  mounted() {
    this.$store.dispatch("getApartments");
  },
  computed: {
    apartments() {
      return this.$store.state.apartments;
    },
    favorite() {
      return this.$store.state.favorite;
    },
  },
  methods: {
    toggleFavorite(apartment) {
      this.$store.commit("toggleFavorite", apartment);
    },
    isInFavorite(apartment) {
      return this.$store.state.favorite.includes(apartment);
    },
  },
};
</script>

<style scoped>
.feed {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

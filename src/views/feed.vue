<template>
  <div class="feed">
    <Apartment
      v-for="apartment of apartments"
      :apartment="apartment"
      :favorite="isInFavorite(apartment)"
      :key="apartment.id"
      @toggle="toggleFavorite"
      @open="open"
    />
    <ApartmentCard v-if="details" :apartment="details" @close="close" />
  </div>
</template>

<script>
import Apartment from "@/components/apartment.vue";
import ApartmentCard from "@/components/apartment-card.vue";

export default {
  name: "Feed",
  components: {
    Apartment,
    ApartmentCard,
  },
  data() {
    return {
      details: undefined,
    };
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
    open(apartment) {
      this.details = apartment;
    },
    close() {
      this.details = undefined;
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

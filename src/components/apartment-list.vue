<template>
  <div class="apartment-list">
    <ApartmentCard
      v-for="apartment of apartments"
      :apartment="apartment"
      :favorite="isInFavorite(apartment)"
      :key="apartment.id"
      @toggle="toggleFavorite"
      @open="open"
    />
    <ApartmentModal
      v-if="details"
      :apartment="details"
      :favorite="isInFavorite(details)"
      @close="close"
      @toggle="toggleFavorite"
    />
  </div>
</template>

<script>
import ApartmentCard from "@/components/apartment-card.vue";
import ApartmentModal from "@/components/apartment-modal.vue";

export default {
  name: "Feed",
  components: {
    ApartmentCard,
    ApartmentModal,
  },
  props: {
    apartments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      details: undefined,
    };
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
.apartment-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

<template>
  <div>
    <Loader v-if="loading" color="rgb(41, 141, 218)" />
    <ApartmentList v-else :apartments="apartments" />
  </div>
</template>

<script>
import ApartmentList from "@/components/apartment-list.vue";
import Loader from "@/components/loader.vue";

export default {
  name: "Feed",
  components: {
    ApartmentList,
    Loader,
  },

  beforeMount() {
    this.$store.dispatch("getApartments");
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    apartments() {
      return this.$store.state.apartments;
    },
  },
};
</script>

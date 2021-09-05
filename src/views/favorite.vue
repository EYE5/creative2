<template>
  <ApartmentList :apartments="favorite" />
</template>
<script>
import ApartmentList from "@/components/apartment-list.vue";

export default {
  name: "Favorite",
  components: {
    ApartmentList,
  },
  computed: {
    favorite() {
      return this.$store.state.favorite;
    },
  },
};
</script>

<template>
  <c-box
    v-click-outside="close"
    class="apartment-card"
    maxW="xl"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
  >
    <c-flex direction="row" justify-content="start">
      <c-image
        :src="apartment.image"
        :alt="apartment.attributes.title"
        size="360px"
        objectFit="cover"
      />
      <c-flex direction="column">
        <c-box as="h4" mt="2" line-height="tight" is-truncated>
          {{ apartment.attributes.title }}
        </c-box>
        <c-box font-weight="semibold" letter-spacing="wide" font-size="xs">
          {{ apartment.attributes.rooms }} ком &bull;
          {{ apartment.attributes.area }} {{ apartment.attributes.unit }}
        </c-box>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<script>
import { CBox, CImage, CFlex } from "@chakra-ui/vue";
import ClickOutside from "vue-click-outside";

export default {
  name: "ApartmentCard",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  directives: {
    ClickOutside,
  },
  components: { CBox, CImage, CFlex },
  mounted() {
    document.documentElement.style.overflow = "hidden";
  },
  beforeDestroy() {
    document.documentElement.style.overflow = "auto";
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.apartment-card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 900px !important;
  height: 360px;
}
</style>

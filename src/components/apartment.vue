<template>
  <c-box
    maxW="sm"
    border-width="1px"
    rounded="lg"
    ml="2"
    mt="2"
    overflow="hidden"
  >
    <c-image
      :src="apartment.image"
      :alt="apartment.attributes.title"
      size="280px"
      objectFit="cover"
    />
    <c-box p="6">
      <c-box d="flex" align-items="baseline">
        <c-box
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
        >
          {{ apartment.attributes.rooms }} ком &bull;
          {{ apartment.attributes.area }} {{ apartment.attributes.unit }}
        </c-box>
      </c-box>
    </c-box>
    <c-box p="6">
      <c-flex direction="row" justify-content="center">
        <c-box mt="1" as="h4" line-height="tight" is-truncated>
          {{ apartment.attributes.title }}
        </c-box>
        <c-box
          mt="0"
          ml="auto"
          as="button"
          line-height="tight"
          is-truncated
          @click="toggle"
        >
          <c-icon name="star" :color="favorite ? 'green' : 'blue'" />
        </c-box>
      </c-flex>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CImage, CFlex, CIcon } from "@chakra-ui/vue";

export default {
  name: "apartment",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: true,
    },
  },
  components: { CBox, CImage, CFlex, CIcon },
  methods: {
    toggle() {
      this.$emit("toggle", this.apartment);
    },
  },
};
</script>

<style></style>

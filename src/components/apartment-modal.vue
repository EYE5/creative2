<template>
  <div>
    <div class="background" />
    <c-box
      v-click-outside="close"
      class="apartment-modal-container"
      rounded="lg"
      overflow="hidden"
    >
      <div class="apartment-modal-content">
        <c-image
          :src="apartment.image"
          :alt="apartment.attributes.title"
          class="apartment-modal-image"
          objectFit="cover"
        />
        <c-flex direction="column" ml="2" class="apartment-modal-info">
          <div class="apartment-modal-title">
            {{ apartment.attributes.title }}
          </div>
          <c-box font-weight="semibold" letter-spacing="wide" font-size="xs">
            {{ apartment.attributes.rooms }} ком &bull;
            {{ apartment.attributes.area }} {{ apartment.attributes.unit }}
          </c-box>
          <c-divider />
          <div class="apartment-modal-info-row">
            <div class="icon">
              <i class="fas fa-home"></i>
            </div>
            {{
              `г.${apartment.attributes.address.city} ул.${apartment.attributes.address.street} д.${apartment.attributes.address.room}`
            }}
          </div>
          <c-divider />
          <div class="apartment-modal-info-row">
            <div class="icon">
              <i class="fas fa-user"></i>
            </div>
            {{
              `${apartment.relationships.attributes.last_name} ${apartment.relationships.attributes.first_name} ${apartment.relationships.attributes.middle_name}`
            }}
          </div>
          <div class="apartment-modal-buttons">
            <button
              class="apartment-modal-favorite"
              @click="toggle"
              :style="{ background: !favorite ? '#5ad427' : 'red' }"
            >
              {{ !favorite ? "Добавить в избранное" : "Удалить из избранного" }}
            </button>
            <button class="apartment-modal-close" @click="close">
              Закрыть
            </button>
          </div>
        </c-flex>
      </div>
    </c-box>
  </div>
</template>

<script>
import { CBox, CImage, CFlex, CDivider } from "@chakra-ui/vue";
import ClickOutside from "vue-click-outside";

export default {
  name: "ApartmentModal",
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
  directives: {
    ClickOutside,
  },
  components: { CBox, CImage, CFlex, CDivider },
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
    toggle() {
      this.$emit("toggle", this.apartment);
    },
  },
};
</script>

<style scoped>
.apartment-modal-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 700px;
  max-width: 100%;
  height: 400px;
}

.apartment-modal-content {
  display: flex;
  flex-direction: row;
}

.apartment-modal-image {
  width: 400px;
  height: 400px;
}

.apartment-modal-title {
  font-size: 22px;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.306);
}

.apartment-modal-info {
  padding: 10px;
  width: 100%;
}

.apartment-modal-buttons {
  margin: auto 0 10px 0;
  display: flex;
  flex-direction: column;
}

.apartment-modal-favorite {
  margin: 5px 0;
  font-size: 12px;
  color: white;
  border-radius: 5px;
  height: 30px;
}

.apartment-modal-close {
  margin: 5px 0;
  font-size: 12px;
  background: rgb(41, 141, 218);
  color: white;
  border-radius: 5px;
  height: 30px;
}

.apartment-modal-info-row {
  display: flex;
  flex-direction: row;
}

.icon {
  width: 16px;
  height: 18px;
  margin-right: 5px;
}

@media screen and (max-width: 700px) {
  .apartment-modal-container {
    width: 100%;
    height: 800px;
    left: 0;
    top: 0;
    right: 0;
    transform: none;
  }

  .apartment-modal-content {
    flex-direction: column;
  }

  .apartment-modal-image {
    width: 100%;
  }

  .apartment-modal-info {
    padding: 0 10px;
    margin: 0;
  }
}
</style>

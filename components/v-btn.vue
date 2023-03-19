<template>
  <button :class="['btn']"
          :disabled="disabled"
          @click="$emit('clickCallback')">
    {{ title }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VBtn",
  props: {
    disabled: {type: Boolean, default: false},
    title: String,
  }
};
</script>

<style scoped lang="scss">
.btn {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'VT323', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 48px;
  min-width: 101px;
  font-size: 24px;
  line-height: 1.21;
  transition: all .3s ease-out;
}

.btn {
  background-color: $primaryDarkestColor;
  color: $primaryLightestColor;

  &:hover {
    opacity: .9;
  }

  &:active {
    opacity: .8;
  }

  &:disabled {
    opacity: .5;
  }
}
</style>

<template>
  <div class="blocks">
    <div class="blocks__item item" v-for="(v,i) in blocks" :key="i">
      <h2 class="item__title">{{ v.title }}</h2>
      <p class="item__desc">
        {{ v.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VBlocks",
  props: {
    blocks: {type: Array, required: true}
  }
}
</script>

<style scoped lang="scss">
.blocks {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 961px) {
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto 32px;
  }

  &::before,
  &::after {
    animation: slideSquare .5s ease-in-out;
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    z-index: -2;
    background-color: $primaryDarkestColor;
    @keyframes slideSquare {
      from {
        width: 0;
      }
      to {
        width: 20px;
      }
    }
  }

  &::before {
    left: -10px;
    top: -10px;
  }

  &::after {
    bottom: -10px;
    right: -10px;
  }

  .item {
    padding: 16px 4px;
    flex: 1 1 320px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $primaryLightestColor;
@media (max-width: 961px) {
  flex: 0;
  padding: 32px;
}
    &::before {
      position: absolute;
      content: '';
      left: -1px;
      top: -1px;
      z-index: -2;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: $primaryDarkestColor;
    }

    &__title {
      @include h2Pixel;
      margin-bottom: 16px;
    }

    &__desc {
      text-align: center;
      @include body-20-300;
    }
  }
}

</style>
